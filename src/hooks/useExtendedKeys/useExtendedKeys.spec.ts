import { renderHook } from '@testing-library/react-hooks';
import useExtendedKeys from './useExtendedKeys';

const seed =
    '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af';
const seed1 =
    '559e372cf3d614d9c4a3e5be4e254a36d5216e743ac26745d662084ad853fc9b87ad0bee98f7d75fc99bce638f8a87bb3be8c1017bb5df83762021ac28d1ace9';

describe('useDeriveKeys hook', () => {
    it('should derive keys', () => {
    //     const { result } = renderHook(() => useExtendedKeys(seed));
    //
    //     expect(result.current).toEqual({
    //         extendedPrivateKey:
    //             'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe',
    //         extendedPublicKey:
    //             'xpub661MyMwAqRbcFEy9GqeVsL8JSDpJzF1VtP6h6vGGVidH3FPBFyU4QFBMtod4CPTqxjGWZTW7pWCSGNyhup4Sdai4PrSqhpBM28st8ShhUJZ',
    //         masterChainCode: '463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b',
    //         masterPrivateKey: 'f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9',
    //         masterPublicKey: '0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9'
    //     });
    });

    // it('error', () => {
    //     const { result } = renderHook(() => useExtendedKeys(seed1));
    //
    //     expect(result.current).toBe('light');
    // });
});
