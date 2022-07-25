import { wordCountList } from '../mnemonic/mnemonic';

export const isValidLength = (val: string) =>
    wordCountList.includes(((val.length / 8) * 3) as typeof wordCountList[number]);

export const validateWords = (words: string[], wordList: readonly string[], local: any) => {
    const status = {
        empty: false,
        length: false,
        invalidWords: [],
        checksum: false
    };

    const messages = {
        emptyError: 'Empty mnemonic code',
        lengthError: 'Invalid words count: 10, mnemonic code should be 12, 15, 18, 21 or 24 words',
        invalidWords: `${status.invalidWords.join(' ')} is the wrong word`,
        checksumError: 'Mnemonic code checksum invalid'
    };

    if (words.length > 11) status.length = true;
    // if (words.length > 11) status.length = true;

    return status;
};
