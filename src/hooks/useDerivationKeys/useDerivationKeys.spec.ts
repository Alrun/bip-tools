import { renderHook } from '@testing-library/react-hooks';
import useDerivationKeys from './useDerivationKeys';

const SERIALIZED_PRIVATE_KEY =
    'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9' +
    'orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe';
const SERIALIZED_PUBLIC_KEY =
    'xpub661MyMwAqRbcFEy9GqeVsL8JSDpJzF1VtP6h6vGGVidH3FPBFyU' +
    '4QFBMtod4CPTqxjGWZTW7pWCSGNyhup4Sdai4PrSqhpBM28st8ShhUJZ';

describe('useDeriveKeys hook', () => {
    it('should derive the same keys if there is no derivation path', () => {
        const { result } = renderHook(() => useDerivationKeys(SERIALIZED_PRIVATE_KEY, 'bip32'));

        expect(result.current).toEqual({
            extendedDerivedPrivateKey: SERIALIZED_PRIVATE_KEY,
            extendedDerivedPublicKey: SERIALIZED_PUBLIC_KEY
        });
    });

    it('should derive empty keys for invalid input key', () => {
        const invalidKey =
            'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9' +
            'orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojT';
        const { result } = renderHook(() => useDerivationKeys(invalidKey, 'bip32'));

        expect(result.current).toEqual({
            extendedDerivedPrivateKey: '',
            extendedDerivedPublicKey: ''
        });
    });

    it('should derive keys', () => {
        const { result } = renderHook(() => useDerivationKeys(SERIALIZED_PRIVATE_KEY, 'bip49', '0/0'));

        expect(result.current).toEqual({
            extendedDerivedPrivateKey:
                'yprvAGihtXfEHW8bJWZcADN1ak9KQQmXy9ycCZaNah8iYUtKYNHXvttv' +
                'M95XUYLcuFCpMbt8C9uG1CjsKzfy8uvw13V7B31pG2d1wiNcPrwWmHf',
            extendedDerivedPublicKey:
                'ypub6Vi4J3C87sgtWze5GEu1wt63xSc2NchTZnVyP5YL6pRJRAcgUSDA' +
                'twQ1Knb5GiFuTviYHTEjLKNKbUDWWzf55pKg8PTZBG7WYy5p4UCQtqA'
        });
    });
});
