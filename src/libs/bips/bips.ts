import { Bips, Bip } from './bips.d';

/**
 * Gets derivation path.
 *
 * @param {Bip} bip Bip type.
 * @param {string} coin Coin type.
 */
export const getPath = (bip: Bip, coin: string) => {
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
 *
 * @param {Bip} bip Bip type. If not valid or not specified then 'bip49' will be used.
 */
export const getKeyVersion = (bip: Bip) => {
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
