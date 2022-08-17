import { checkPhrase, isEntropyValidLength } from './validate';

describe('isEntropyValidLength', () => {
    it('should return true for valid entropy', () =>
        expect(isEntropyValidLength('0485e939859486ff3ead9afa914b9046')).toBeTruthy());

    it('should return false for invalid entropy', () =>
        expect(isEntropyValidLength('0485e939859486ff3ead9afa914b904')).toBeFalsy());
});

describe('checkPhrase', () => {
    it('should return an empty string for an empty phrase', () => expect(checkPhrase([])).toBe(''));
    it('should return an empty string if the phrase is valid', () => expect(checkPhrase(['abandon', 'zoo'])).toBe(''));

    it('should return a string with the text of the error if the word is not valid', () =>
        expect(checkPhrase(['xyz', 'zoo'])).toBe('The word "xyz" is incorrect!'));

    it('should return a string with the error text if the words are not valid', () =>
        expect(checkPhrase(['xyz', 'zyx'])).toBe('The words "xyz, zyx" are incorrect!'));
});
