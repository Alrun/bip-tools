import { byteArrayToHexString, hexToBuffer, hmac512 } from './crypto';

describe('crypto hmac512 utility', () => {
    it('should hash the input key and data messages using SHA512', () => {
        const key = new TextEncoder().encode('Key message');
        const data = hexToBuffer('Data message');
        const signature = hmac512(key, data);

        expect(byteArrayToHexString(signature)).toBe(
            '18d6c45d708046ce7506664c2dd9ad59fe515df2ceaa3297a381105f6c715df6' +
                '5a8070eea37c68d37223501bf49a8c7565c76f7c0e1ff2299c1e597791e4fdf0'
        );
    });
});
