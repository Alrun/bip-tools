import {
    bufferToHex,
    strToBuffer,
    hmac512,
    hash160,
    sha256,
    hexToBuffer,
    keccak256,
    binToHex,
    filterStr,
    hexToBin,
    strToChunks,
    pbkdf2sha512
} from './crypto';

describe('crypto utilities', () => {
    describe('pbkdf2sha512', () => {
        it('should encode the value using pbkdf2sha512', () => {
            const password = strToBuffer('test word');
            const salt = strToBuffer('test salt');

            expect(bufferToHex(pbkdf2sha512(password, salt, { c: 2048, dkLen: 64 }))).toBe(
                'dd240f8362c99575033ac8503fe2a5dc0e7805a799da3f9845fc8a273b86e058' +
                    'e932831ed1d217982c610e69d1e34b20fe94db78ec95b1836bb1343a087002b7'
            );
        });
    });

    describe('sha256', () => {
        it('should hash the value using SHA256', () => {
            expect(bufferToHex(sha256(hexToBuffer('2399ab532a')))).toBe(
                'fc73bf2744f18905cd0b18fa898b7da6a956394df74d7761f5e6259b7c54cfdc'
            );
        });
    });

    describe('hash160', () => {
        it('should hash the value using SHA512', () => {
            expect(hash160('03165db90c2e8ae9b76975d80cb558d64c63470d8da17f40f661b8053868b72157')).toBe(
                '76a5d115520caf1fa51754fa9095ed794460f772'
            );
        });
    });

    describe('hmac512', () => {
        it('should hash the input key and data messages using hmac512', () => {
            const key = new TextEncoder().encode('Key message');
            const data = strToBuffer('Data message');
            const signature = hmac512(key, data);

            expect(bufferToHex(signature)).toBe(
                '9bce7fc7d3f7675c6d438b5c9eb5f58743a8871ae91f681ea0323183f89fe9f5' +
                    'bb8da84af3de7032bac7788673257d45f815c91466dfd747fa8be7ced6f9739b'
            );
        });
    });

    describe('keccak256', () => {
        it('should hash the input value using keccak256', () => {
            expect(bufferToHex(keccak256(hexToBuffer('1234')))).toBe(
                '56570de287d73cd1cb6092bb8fdee6173974955fdef345ae579ee9f475ea7432'
            );
        });
    });

    describe('filterStr', () => {
        const str = '12345abcde';

        it('should return empty string', () => expect(filterStr(str, '')).toBe(''));

        it('should return the filtered string', () => expect(filterStr(str, '12')).toBe('12'));

        it('should return the filtered trimmed string', () => expect(filterStr(str, '1234', 2)).toBe('12'));
    });

    describe('hexToBin', () => {
        it('should return empty string', () => expect(hexToBin('')).toBe(''));

        it('should return binary string', () => expect(hexToBin('ff')).toBe('11111111'));

        it('should return binary string', () => expect(hexToBin('fxyzf')).toBe('11111111'));
    });

    describe('binToHex', () => {
        it('should return empty string', () => expect(binToHex('')).toBe(''));

        it('should return hex string', () => expect(binToHex('1111')).toBe('f'));

        it('should return hex string', () => expect(binToHex('111122331111')).toBe('ff'));
    });

    describe('strToChunks', () => {
        const str = '012345abcde';

        it('should return empty array', () => expect(strToChunks(str, -1)).toEqual([]));

        it('should split the string', () => expect(strToChunks(str, 4)).toEqual(['0123', '45ab', 'cde']));

        it('should pad the string with characters at the beginning', () =>
            expect(strToChunks(str, 10, 'xyz')).toEqual(['012345abcd', 'xyzxyzxyze']));

        it('should pad the string with characters at the end', () =>
            expect(strToChunks(str, 10, '', 'xyz')).toEqual(['012345abcd', 'exyzxyzxyz']));
    });
});
