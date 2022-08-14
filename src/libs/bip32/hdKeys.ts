import bs58 from 'bs58';
import { CURVE, getPublicKey as getPublicKeyNoble } from '@noble/secp256k1';
import { bufferToHex, hash160, hexToBuffer, hmac512, sha256 } from '../../utils/crypto/crypto';
import { getKeyVersion } from '../bips/bips';
import { Bip } from '../bips/bips.d';

/**
 * Gets compressed public key from private key.
 * '02' at the start if y co-ordinate is even.
 * '03' at the start if y co-ordinate is odd.
 *
 * @param {string} privateKey Hex string with private key.
 * @param {boolean} isCompressed '04' at the start.
 */
export const getPublicKey = (privateKey: string, isCompressed = true) => getPublicKeyNoble(privateKey, isCompressed);

/**
 * Generates master key from seed.
 *        seed
 *        |
 *        m
 *
 * @param seed {string} Hex string with seed.
 */
export const generateMasterKeys = (seed: string) => {
    const encodedSeed = hexToBuffer(seed);
    const encodedKey = new TextEncoder().encode('Bitcoin seed');

    const signature = hmac512(encodedKey, encodedSeed);
    const hexSignature = bufferToHex(signature);

    const masterPrivateKey = hexSignature.slice(0, 64);
    const masterChainCode = hexSignature.slice(64);
    const masterPublicKey = bufferToHex(getPublicKey(masterPrivateKey));

    return [masterPrivateKey, masterPublicKey, masterChainCode];
};

/**
 * Derives child keys.
 *        m
 *        |- m/0
 *        |- m/1
 *        |- m/2
 *        ...
 *        |- m/2147483648 (hardened - m/0')
 *        ...
 *
 * @param {string} privateKey Hex string with private key.
 * @param {string} publicKey Hex string with public key.
 * @param {string} chainCode Hex string with chain code.
 * @param {number} index Use 0-2147483647 for normal, and 2147483648-4294967295 for hardened keys.
 */
export const deriveChildKeys = (privateKey: string, publicKey: string, chainCode: string, index: number = 0) => {
    const hexIndex = index.toString(16).padStart(8, '0');
    const data =
        index < 2 ** 31
            ? // Normal child (extended public key can derive its public keys)
              publicKey + hexIndex
            : // Hardened child (extended public key cannot derive its public keys)
              `00${privateKey}${hexIndex}`;

    const signature = hmac512(hexToBuffer(chainCode), hexToBuffer(data));
    const hexSignature = bufferToHex(signature);

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

    const childPublicKey = bufferToHex(getPublicKey(childPrivateKey));

    return [childPrivateKey, childPublicKey, childChainCode];
};

/**
 * Gets fingerprint.
 *
 * @param {string} publicKey Hex string with public key.
 */
export const getFingerprint = (publicKey: string) => hash160(publicKey).slice(0, 8);

/**
 * Gets checksum for serialized key.
 *
 * @param {string} hex Hex string (version + depth + fingerprint + index + chainCode + key).
 */
export const getChecksum = (hex: string) => bufferToHex(sha256(sha256(hexToBuffer(hex)))).slice(0, 8);

/**
 * Serializes the extended key.
 *        version | depth  | fingerprint | index   | chain code | key      | checksum
 *        4 bytes | 1 byte | 4 bytes     | 4 bytes | 33 bytes   | 33 bytes | 4 bytes
 *
 * @param {string} privateKey Hex string with private key.
 * @param {string} publicKey Hex string with public key.
 * @param {string} chainCode Hex string with chain code.
 * @param {string} version Version bytes.
 *        "xprv" - 0488ade4
 *        "xpub" - 0488b21e
 *        "yprv" - 049d7878 (for extended keys in a BIP49 derivation path)
 *        "ypub" - 049d7cb2
 *        "zprv" - 04b2430c (for extended keys in a BIP84 derivation path)
 *        "zpub" - 04b24746
 * @param {string} depth Derivation path depth.
 *        0 for master nodes — m
 *        1 for level-1 derived keys — m/0', or m/13, or …
 *        2 for level-2 derived keys — m/0'/28, or m/44'/0', or …
 *        … up to 255.
 * @param {number} index
 * @param {string} fingerprint The first 4 bytes of the hash160 of the parent’s public key.
 *        "00000000" for master.
 */
export const serializeExtendedKey = (
    privateKey: string,
    publicKey: string,
    chainCode: string,
    version: string,
    depth = 0,
    index = 0,
    fingerprint = ''
) => {
    let v;
    let key = `00${privateKey}`; // prepend 00 to private keys (to make them 33 bytes, the same as public keys)
    const fp = fingerprint || getFingerprint(publicKey);
    const indexHex = index.toString(16).padStart(8, '0');
    const depthHex = depth.toString(16).padStart(2, '0');

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
        case 'yprv': {
            v = '049d7878';
            break;
        }
        case 'ypub': {
            v = '049d7cb2';
            key = privateKey;
            break;
        }
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

    const serialized = v + depthHex + fp + indexHex + chainCode + key;
    const checksum = getChecksum(serialized);

    return bs58.encode(hexToBuffer(serialized + checksum));
};

/**
 * Decodes serialized key.
 *
 * @param {string} serializedKey Key in base58.
 * @param {boolean} check Check checksum after decode.
 */
export const decodeSerializedKey = (serializedKey: string, check = false) => {
    const decodedHex = bufferToHex(bs58.decode(serializedKey));

    const version = decodedHex.slice(0, 8);
    const depth = decodedHex.slice(8, 10);
    const fingerprint = decodedHex.slice(10, 18);
    const index = decodedHex.slice(18, 26);
    const chainCode = decodedHex.slice(26, 90);
    const checksum = decodedHex.slice(156);
    let key = decodedHex.slice(90, 156);

    if (check) {
        const serialized = version + depth + fingerprint + index + chainCode + key;
        const checksumRecovered = getChecksum(serialized);

        if (checksumRecovered !== checksum) {
            throw Error('Invalid serialized key!');
        }
    }
    // Remove extra zeros for the private key.
    if (key.slice(0, 2) === '00') key = key.slice(2);

    return { version, depth, fingerprint, index, chainCode, key, checksum };
};

/**
 * Gets derived extended serialized keys.
 *
 * @param {string} serializedExtendedPrivateKey Base58 string with extended serialized private key.
 * @param {Bip} bip Type of BIP.
 * @param {string} path Derived path.
 */
export const getDerivedKeys = (serializedExtendedPrivateKey: string, path = '/', bip: Bip = 'bip44') => {
    if (serializedExtendedPrivateKey) {
        const { chainCode, key } = decodeSerializedKey(serializedExtendedPrivateKey);
        const { privateVersion, publicVersion } = getKeyVersion(bip);

        const pathDepth = path
            .replace('m/', '')
            .split('/')
            .filter((item) => item);

        const derivationPath = `${pathDepth.join('/')}/`.replace(/\/+/, '/');

        let childPrivateKey = key;
        let childPublicKey = bufferToHex(getPublicKey(key));
        let childChainCode = chainCode;
        let parentPublicKey = childPublicKey;
        let idx = 0;

        pathDepth.forEach((item) => {
            /* istanbul ignore if */
            if (item) {
                const getNumber = item.split("'");
                const currentIndex = getNumber.length > 1 ? +getNumber[0] + 2147483648 : +getNumber[0];

                parentPublicKey = childPublicKey;

                const [interimPrivateKey, interimPublicKey, interimChainCode] = deriveChildKeys(
                    childPrivateKey,
                    childPublicKey,
                    childChainCode,
                    currentIndex
                );

                childPrivateKey = interimPrivateKey;
                childPublicKey = interimPublicKey;
                childChainCode = interimChainCode;
                idx = currentIndex;
            }
        });

        const serializedPrivateKey = serializeExtendedKey(
            childPrivateKey,
            childPublicKey,
            childChainCode,
            privateVersion,
            pathDepth.length,
            idx,
            pathDepth.length ? getFingerprint(parentPublicKey) : '00000000'
        );

        const serializedPublicKey = serializeExtendedKey(
            childPublicKey,
            childPublicKey,
            childChainCode,
            publicVersion,
            pathDepth.length,
            idx,
            pathDepth.length ? getFingerprint(parentPublicKey) : '00000000'
        );

        return [serializedPrivateKey, serializedPublicKey, derivationPath];
    }

    return [];
};
