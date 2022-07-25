import React from 'react';
import getSeed from '../../libs/bip39/seed/seed';

/**
 * BIP39 Seed.
 * @param {string} words
 * @param {string} passphrase
 */
const useSeed = (words: string, passphrase = '') => {
    const [seed, setSeed] = React.useState('');

    React.useEffect(() => {
        if (words) {
            setSeed(getSeed(words, passphrase));
        }
    }, [words, passphrase]);

    return seed;
};

export default useSeed;
