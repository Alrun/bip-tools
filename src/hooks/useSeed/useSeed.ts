import React from 'react';
import getSeed from '../../libs/bip39/seed/seed';

/**
 * Generates a 64-bit hex string from a mnemonic phrase with an optional password.
 *
 * @param {string} words List of words separated by a space.
 * @param {string} passphrase Optional passphrase.
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
