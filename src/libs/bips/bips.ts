import bs58 from 'bs58';
import { bech32 } from 'bech32';
import { Bips, BipType, Script } from './bips.d';
import { hash160, hexToBuffer } from '../../utils/crypto/crypto';
import { getChecksum } from '../bip32/hdKeys';

/**
 * Gets derivation path.
 * @param bip
 * @param coin
 */
export const getPath = (bip: BipType, coin: string) => {
    switch (bip) {
        case 'bip44':
            return `${Bips.Bip44}/${coin}'/`;
        case 'bip49':
            return `${Bips.Bip49}/${coin}'/`;
        case 'bip84':
            return `${Bips.Bip84}/${coin}'/`;
        default: {
            return `${Bips.Bip32}/`;
        }
    }
};

/**
 * Gets the version of the key.
 * @param bip
 */
export const getKeyVersion = (bip: BipType) => {
    switch (bip) {
        case 'bip49':
            return {
                privateVersion: 'yprv',
                publicVersion: 'ypub'
            };
        case 'bip84':
            return {
                privateVersion: 'zprv',
                publicVersion: 'zpub'
            };
        default: {
            return {
                privateVersion: 'xprv',
                publicVersion: 'xpub'
            };
        }
    }
};

/**
 * Gets address.
 * @param publicKey
 * @param {Script}script
 *        P2PKH (Pay To Public Key Hash)
 *        P2WPKH-P2SH (Pay To Script Hash)
 *        P2WPKH (Pay To Witness Public Key Hash)
 */
export const getAddress = (publicKey: string, script?: string) => {
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
