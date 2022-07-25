import { renderHook } from '@testing-library/react-hooks';
import useDerivationKeys from './useDerivationKeys';

describe('useDeriveKeys hook', () => {
    it('should derive keys', () => {
        const { result } = renderHook(() =>
            useDerivationKeys(
                'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe',
                'bip44',
                '0/0/0'
            )
        );

        // expect(result.current).toEqual({
        //     extendedDerivedPrivateKey: '1',
        //     extendedDerivedPublicKey: '1'
        // });
    });

    // it('error', () => {
    //     const { result } = renderHook(() => useExtendedKeys(seed1));
    //
    //     expect(result.current).toBe('light');
    // });
});
