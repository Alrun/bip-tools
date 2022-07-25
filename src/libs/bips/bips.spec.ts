import { getPath } from './bips';
import { Bips } from './bips.d';

describe('useDeriveKeys', () => {
    describe('generateMasterKeys', () => {
        it('should generate compressed master keys', () => {
            const path = getPath('bip44', '1');

            expect(path).toBe(`${Bips.Bip44}/1'/`);
        });
    });
});
