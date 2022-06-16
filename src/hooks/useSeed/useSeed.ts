import React from 'react';
import { byteArrayToHexString, crypto } from '../../utils/crypto/crypto';

/**
 * BIP39 Seed.
 * @param {string} wordList
 * @param {string} passphrase
 */
const useSeed = (wordList: string, passphrase = '') => {
    const [seed, setSeed] = React.useState('');

    React.useEffect(() => {
        const mnemonic = new TextEncoder().encode(wordList);
        // Salt. "mnemonic" is always used in the salt with optional passphrase appended to it
        const salt = new TextEncoder().encode(`mnemonic${passphrase}`);

        if (wordList) {
            (async () => {
                const keyMaterial = await crypto.subtle.importKey('raw', mnemonic, 'PBKDF2', false, [
                    'deriveBits',
                    'deriveKey'
                ]);

                const derivedBits = await crypto.subtle.deriveBits(
                    {
                        name: 'PBKDF2',
                        salt,
                        iterations: 2048,
                        hash: 'SHA-512'
                    },
                    keyMaterial,
                    512
                );

                const biteArray = new Uint8Array(derivedBits);

                setSeed(byteArrayToHexString(biteArray));
            })();
        }
    }, [wordList]);

    return seed;
};

export default useSeed;
