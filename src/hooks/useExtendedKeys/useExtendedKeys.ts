import React from 'react';
import { CURVE, Point, getPublicKey } from '@noble/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import bs58 from 'bs58';
import { byteArrayToHexString, hexToBuffer, hmac512 } from '../../utils/crypto/crypto';

/**
 * Generates master key from seed.
 *
 * seed
 * |
 * m
 *
 * @param seed {string} Hex string with seed.
 * @param isCompressed {boolean} If true, public key will be compressed.
 */
export const generateMasterKeys = (seed: string, isCompressed: boolean = true) => {
    const encodedSeed = hexToBuffer(seed);
    const encodedKey = new TextEncoder().encode('Bitcoin seed');

    const signature = hmac512(encodedKey, encodedSeed);
    const hexSignature = byteArrayToHexString(signature);

    const masterPrivateKey = hexSignature.slice(0, 64);
    const masterChainCode = hexSignature.slice(64);
    const masterPublicKey = byteArrayToHexString(getPublicKey(masterPrivateKey, isCompressed));

    return [masterPrivateKey, masterPublicKey, masterChainCode];
};

/**
 * Derives child keys.
 *
 * m
 * |- m/0
 * |- m/1
 * |- m/2
 * ...
 * |- m/2147483648 (hardened - m/0')
 * ...
 *
 * @param {string} privateKey Hex string with private key.
 * @param {string} publicKey Hex string with public key.
 * @param {string} chainCode Hex string with chain code.
 * @param {number} index Use 0-2147483647 for normal, and 2147483648-4294967295 for hardened keys.
 * @param {boolean} isCompressed  If true, encode to compressed key format.
 */
export const deriveChildKeys = (
    privateKey: string,
    publicKey: string,
    chainCode: string,
    index: number = 0,
    isCompressed: boolean = true
) => {
    const hexIndex = index.toString(16).padStart(8, '0');
    const data =
        index < 2 ** 31
            ? // Normal child (extended public key can derive its public keys)
              publicKey + hexIndex
            : // Hardened child (extended public key cannot derive its public keys)
              `00${privateKey}${hexIndex}`;

    const signature = hmac512(hexToBuffer(chainCode), hexToBuffer(data));
    const hexSignature = byteArrayToHexString(signature);

    const hexSignatureLeft = hexSignature.slice(0, 64);
    const childChainCode = hexSignature.slice(64);
    /* istanbul ignore if */
    // Check child chain code is valid (not greater than the number of points on the curve)
    if (BigInt(`0x${childChainCode}`) > CURVE.n) {
        throw Error('Child chain code is greater than or equal to the order of the elliptic curve. Try next index.');
    }

    const childPrivateKey = ((BigInt(`0x${hexSignatureLeft}`) + BigInt(`0x${privateKey}`)) % CURVE.n)
        .toString(16)
        .padStart(64, '0');
    /* istanbul ignore if */
    if (parseInt(childPrivateKey, 16) === 0) {
        throw Error('Child private key is zero. Try the next index.');
    }

    const childPublicKey = byteArrayToHexString(getPublicKey(childPrivateKey, isCompressed));

    return [childPrivateKey, childPublicKey, childChainCode];
};

/**
 * Derives extended public key.
 *
 * m -------- p
 *            |- p/0
 *            |- p/1
 *            |- p/3
 *
 * @param publicKey
 * @param chainCode
 * @param index
 * @param isCompressed
 */
export const deriveExtendedPublicKey = (
    publicKey: string,
    chainCode: string,
    index: number,
    isCompressed: boolean = true
) => {
    if (index >= 2 ** 31) {
        throw new Error("Can't create hardened child public keys from parent public keys.");
    }

    const hexIndex = index.toString(16).padStart(8, '0');
    const data = publicKey + hexIndex;

    const signature = hmac512(hexToBuffer(chainCode), hexToBuffer(data));
    const hexSignature = byteArrayToHexString(signature);

    const hexSignatureLeft = hexSignature.slice(0, 64);
    const childChainCode = hexSignature.slice(64);
    /* istanbul ignore if */
    if (BigInt(`0x${hexSignatureLeft}`) > CURVE.n) {
        throw Error('Result of digest is greater than the order of the curve. Try the next index.');
    }

    const pointHmac = Point.fromHex(hexSignatureLeft);
    const pointPublic = Point.fromHex(publicKey);
    const point = pointHmac.add(pointPublic);
    /* istanbul ignore if */
    if (!point) {
        throw Error('Child public key point is at point of infinity. Try the next index.');
    }

    const childPublicKey = point.toHex(isCompressed);

    return [childPublicKey, childChainCode];
};

/**
 * Creates fingerprint.
 * @param {string} publicKey Hex string with public key.
 */
export const createFingerprint = (publicKey: string) => {
    const publicKeyToSha = sha256(hexToBuffer(publicKey));
    const hash160 = ripemd160(publicKeyToSha);
    const hexHash160 = byteArrayToHexString(hash160);

    return hexHash160.slice(0, 8);
};

/**
 * Defines checksum for serialized key.
 * @param {string} hex Hex string (version + depth + fingerprint + index + chainCode + key).
 */
export const defineChecksum = (hex: string) => byteArrayToHexString(sha256(sha256(hexToBuffer(hex)))).slice(0, 8);

/**
 * Serializes the extended key.
 *
 * version | depth  | fingerprint | index   | chain code | key      | checksum
 * 4 bytes | 1 byte | 4 bytes     | 4 bytes | 33 bytes   | 33 bytes | 4 bytes
 *
 * @param privateKey
 * @param publicKey
 * @param chainCode
 * @param version
 * @param depth
 * @param index
 * @param fingerprint
 */
export const serializeExtendedKey = (
    privateKey: string,
    publicKey: string,
    chainCode: string,
    version: string,
    depth: string = '00',
    index: number = 0,
    fingerprint: string = ''
) => {
    let v; // private = 0x0488ade4 (xprv), public = 0x0488b21e (xpub)
    let key = `00${privateKey}`; // prepend 00 to private keys (to make them 33 bytes, the same as public keys)
    const fp = fingerprint || createFingerprint(publicKey); // "018c1259"
    const indexStr = index.toString().padStart(8, '0');

    switch (version) {
        case 'xprv': {
            v = '0488ade4';
            break;
        }
        case 'xpub': {
            v = '0488b21e';
            key = privateKey;
            break;
        }
        // For extended keys in a BIP 49 derivation path
        case 'yprv': {
            v = '049d7878';
            break;
        }
        case 'ypub': {
            v = '049d7cb2';
            key = privateKey;
            break;
        }
        // For extended keys in a BIP 84 derivation path
        case 'zprv': {
            v = '04b2430c';
            break;
        }
        case 'zpub': {
            v = '04b24746';
            key = privateKey;
            break;
        }

        default: {
            throw Error(`Wrong version ${version}. Accepts 'xprv', 'xpub', 'yprv', 'ypub', 'zprv' or 'zpub' only.`);
        }
    }

    const serialized = v + depth + fp + indexStr + chainCode + key;
    const checksum = defineChecksum(serialized);

    return bs58.encode(hexToBuffer(serialized + checksum));
};

/**
 * Key gens
 * Hierarchical Deterministic (Anti Chaos)
 * @param seed
 * @param isCompressed
 */
const useExtendedKeys = (seed: string, isCompressed = true) => {
    const [extendedKey, setExtendedKey] = React.useState({});

    React.useEffect(() => {
        if (seed) {
            // (async () => {
            const [masterPrivateKey, masterPublicKey, masterChainCode] = generateMasterKeys(
                '89da5345186a335d6042162676eea321a6231fe37deb73186e8ef496745ccaadee9e918c8269617988028a047f0b5e124942a1ff4b4b05203c366bd51de55a99',
                isCompressed
            );

            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                0,
                isCompressed
            );

            const [extendedChildPublicKey, extendedChildChainCode] = deriveExtendedPublicKey(
                childPublicKey,
                childChainCode,
                0
            );

            const extendedPrivateKey = serializeExtendedKey(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                'xprv',
                '00',
                0,
                '00000000'
            );

            const extendedPublicKey = serializeExtendedKey(
                masterPublicKey,
                masterPublicKey,
                masterChainCode,
                'xpub',
                '00',
                0,
                '00000000'
            );
            // })();

            setExtendedKey({
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                extendedPrivateKey,
                extendedPublicKey
            });
        }
    }, []);

    return extendedKey;
};

export default useExtendedKeys;
