import formatPathValue from './formatPathValue';

describe('formatPathValue', () => {
    it('should return an empty string if the input value is empty', () => {
        const publicKey = formatPathValue('');

        expect(publicKey).toBe('');
    });

    it('should return zero if the input value is NaN', () => {
        const publicKey = formatPathValue('/');

        expect(publicKey).toBe('0');
    });

    it('should return zero with hardened if the input value is NaN and hardened', () => {
        const publicKey = formatPathValue("/'");

        expect(publicKey).toBe("0'");
    });

    it('should return the maximum normal value if the input value overflows', () => {
        const publicKey = formatPathValue('9999999999');

        expect(publicKey).toBe('4294967295');
    });

    it('should return the maximum hardened value if the input value overflows and hardened', () => {
        const publicKey = formatPathValue("9999999999'");

        expect(publicKey).toBe("2147483647'");
    });

    it('should return the hardened value if the input value hardened', () => {
        const publicKey = formatPathValue("0'");

        expect(publicKey).toBe("0'");
    });

    it('should return the value if the input value normal', () => {
        const publicKey = formatPathValue('0');

        expect(publicKey).toBe('0');
    });
});
