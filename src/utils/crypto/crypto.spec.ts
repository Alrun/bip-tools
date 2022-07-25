import { bufferToHex, strToBuffer, hmac512, hash160, sha256, hexToBuffer } from './crypto';

describe('crypto utilities', () => {
    describe('crypto sha256 utility', () => {
        it('should hash the input key and data messages using SHA512', () => {
            expect(bufferToHex(sha256(hexToBuffer('2399ab532a')))).toBe(
                'fc73bf2744f18905cd0b18fa898b7da6a956394df74d7761f5e6259b7c54cfdc'
            );
        });
    });

    describe('crypto hash160 utility', () => {
        it('should hash the input key and data messages using SHA512', () => {
            expect(hash160('03165db90c2e8ae9b76975d80cb558d64c63470d8da17f40f661b8053868b72157')).toBe(
                '76a5d115520caf1fa51754fa9095ed794460f772'
            );
        });
    });

    describe('crypto hash160 utility', () => {
        it('should hash the input key and data messages using SHA512', () => {
            const key = new TextEncoder().encode('Key message');
            const data = strToBuffer('Data message');
            const signature = hmac512(key, data);

            expect(bufferToHex(signature)).toBe(
                '9bce7fc7d3f7675c6d438b5c9eb5f58743a8871ae91f681ea0323183f89fe9f5' +
                    'bb8da84af3de7032bac7788673257d45f815c91466dfd747fa8be7ced6f9739b'
            );
        });
    });
});
