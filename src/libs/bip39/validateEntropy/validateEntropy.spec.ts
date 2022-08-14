import { isEntropyValidLength } from './validateEntropy';

describe('isEntropyValidLength', () => {
    it('should return true for valid entropy', () =>
        expect(isEntropyValidLength('0485e939859486ff3ead9afa914b9046')).toBeTruthy());

    it('should return false for invalid entropy', () =>
        expect(isEntropyValidLength('0485e939859486ff3ead9afa914b904')).toBeFalsy());
});
