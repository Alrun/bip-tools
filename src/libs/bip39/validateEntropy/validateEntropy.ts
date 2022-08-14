import { wordCountList } from '../mnemonic/mnemonic';

/**
 * Checks if the number of words matches.
 *
 * @param {string} entropy Entropy in hex string.
 */
// eslint-disable-next-line import/prefer-default-export
export const isEntropyValidLength = (entropy: string) =>
    wordCountList.includes(((entropy.length / 8) * 3) as typeof wordCountList[number]);
