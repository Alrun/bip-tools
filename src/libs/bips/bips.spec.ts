import { getKeyVersion, getPath } from './bips';
import { Bips } from './bips.d';

describe('useDeriveKeys', () => {
    describe('generateMasterKeys', () => {
        it('should return derived path for BIP44', () => {
            const path = getPath('bip44', '1');

            expect(path).toBe(`${Bips.Bip44}/1'/`);
        });

        it('should return derived path for BIP49', () => {
            const path = getPath('bip49', '1');

            expect(path).toBe(`${Bips.Bip49}/1'/`);
        });

        it('should return derived path for BIP84', () => {
            const path = getPath('bip84', '1');

            expect(path).toBe(`${Bips.Bip84}/1'/`);
        });

        it('should return derived path for BIP32', () => {
            const path = getPath('bip32', '1');

            expect(path).toBe(`${Bips.Bip32}/`);
        });
    });

    describe('generateMasterKeys', () => {
        it('should return version private and public keys for BIP32/BIP44 ', () => {
            const version = getKeyVersion('bip32');

            expect(version).toEqual({
                privateVersion: 'xprv',
                publicVersion: 'xpub'
            });
        });

        it('should return version private and public keys for BIP49', () => {
            const version = getKeyVersion('bip49');

            expect(version).toEqual({
                privateVersion: 'yprv',
                publicVersion: 'ypub'
            });
        });

        it('should return version private and public keys for BIP84', () => {
            const version = getKeyVersion('bip84');

            expect(version).toEqual({
                privateVersion: 'zprv',
                publicVersion: 'zpub'
            });
        });
    });
});
