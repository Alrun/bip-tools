import { bufferToHex, pbkdf2sha512, strToBuffer } from '../../../utils/crypto/crypto';

/**
 * Gets seed.
 *
 * @param {string} words List of words separated by a space.
 * @param {string} passphrase Optional passphrase.
 */
const getSeed = (words: string, passphrase = '') => {
    const mnemonic = strToBuffer(words);
    // Salt. "mnemonic" is always used in the salt with optional passphrase appended to it.
    const salt = strToBuffer(`mnemonic${passphrase}`);
    const biteArray = pbkdf2sha512(mnemonic, salt, { c: 2048, dkLen: 64 });

    return bufferToHex(biteArray);
};

export default getSeed;
