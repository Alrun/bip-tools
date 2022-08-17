import { wordCountList } from '../mnemonic/mnemonic';
import enWordList from '../wordlists/english';

/**
 * Checks if the number of words matches.
 *
 * @param {string} entropy Entropy in hex string.
 */
export const isEntropyValidLength = (entropy: string) =>
    wordCountList.includes(((entropy.length / 8) * 3) as typeof wordCountList[number]);

/**
 * Checks the words of a mnemonic phrase.
 *
 * @param {string[]} wordsArr Words of a mnemonic phrase.
 */
export const checkPhrase = (wordsArr: string[]) => {
    const invalidWords = wordsArr.filter((item) => !enWordList.includes(item));

    if (invalidWords.length) {
        return `The word${invalidWords.length > 1 ? 's' : ''} "${invalidWords.join(', ')}" ${
            invalidWords.length > 1 ? 'are' : 'is'
        } incorrect!`;
    }

    return '';
};
