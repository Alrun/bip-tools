import bs58 from 'bs58';
import { bech32 } from 'bech32';
import { bufferToHex, hash160, hexToBuffer, keccak256 } from '../../utils/crypto/crypto';
import { getChecksum, getPublicKey } from '../bip32/hdKeys';
import { AddressUnit } from './address.d';
import { Script } from '../bips/bips.d';

/**
 * Gets the address depending on the script.
 *
 * @param {string} publicKey Hex string with public key.
 * @param {Script} script Script used for encoding.
 *        P2PKH (Pay To Public Key Hash)
 *        P2WPKH-P2SH (Pay To Script Hash)
 *        P2WPKH (Pay To Witness Public Key Hash)
 */
export const getAddress = (publicKey: string, script?: `${Script}`) => {
    switch (script) {
        case Script.P2WPKHP2SH: {
            const hashWithWitness = hash160(`0014${hash160(publicKey)}`);
            const checksum = getChecksum(`05${hashWithWitness}`);

            return bs58.encode(hexToBuffer(`05${hashWithWitness}${checksum}`));
        }
        case Script.P2WPKH: {
            const bech32Words = bech32.toWords(hexToBuffer(hash160(publicKey)));
            const words = new Uint8Array([0, ...bech32Words]);

            return bech32.encode('bc', words);
        }
        default: {
            const hashWithVersion = `00${hash160(publicKey)}`;
            const checksum = getChecksum(hashWithVersion);

            return bs58.encode(hexToBuffer(`${hashWithVersion}${checksum}`));
        }
    }
};

/**
 * Gets address and keys.
 *
 * @param {string} privateKey Private key in hex.
 * @param {string} version Version of the key.
 * @param {string} script Script used for encoding.
 * @param {string} coin Coin type.
 * @returns {AddressUnit}
 */
export const getAddressKeys = (privateKey: string, version = 'xprv', script?: `${Script}`, coin = '0'): AddressUnit => {
    const publicKey = bufferToHex(getPublicKey(privateKey));
    const publicKeyUncompressed = bufferToHex(getPublicKey(privateKey, false));
    // Ethereum
    if (coin === '60') {
        const encodedPublicKey = keccak256(hexToBuffer(publicKeyUncompressed.slice(2)));

        return {
            address: `0x${bufferToHex(encodedPublicKey).slice(-40)}`,
            publicKey: `0x${publicKey}`,
            privateKey: `0x${privateKey}`
        };
    }
    // Bitcoin
    /**
     * Version byte prefix.
     * 0x80 = Mainnet
     * 0xEF = Testnet
     */
    const versionByte = '80';
    // Compression Byte suffix (optional)
    const compressionByte = '01';

    const privateKeyWithVersion = `${versionByte}${privateKey}${compressionByte}`;
    const privateKeyChecksum = getChecksum(privateKeyWithVersion);

    let address;

    if (version === 'yprv') {
        address = getAddress(publicKey, Script.P2WPKHP2SH);
    } else if (version === 'zprv') {
        address = getAddress(publicKey, Script.P2WPKH);
    } else {
        address = getAddress(publicKey, script);
    }

    return {
        address,
        publicKey,
        privateKey: bs58.encode(hexToBuffer(`${privateKeyWithVersion}${privateKeyChecksum}`))
    };
};
