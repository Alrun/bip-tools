import { renderHook } from '@testing-library/react-hooks';
import useExtendedKeys from './useExtendedKeys';

describe('useExtendedKeys hook', () => {
    it('should return empty properties if the input seed is empty', () => {
        const { result } = renderHook(() => useExtendedKeys(''));

        expect(result.current).toEqual({
            masterChainCode: '',
            masterPrivateKey: '',
            masterPublicKey: '',
            serializedExtendedPrivateKey: '',
            serializedExtendedPublicKey: ''
        });
    });

    it('should derive extended keys', () => {
        const { result } = renderHook(() =>
            useExtendedKeys(
                '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882' +
                    'ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af'
            )
        );

        expect(result.current).toEqual({
            masterChainCode: '463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b',
            masterPrivateKey: 'f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9',
            masterPublicKey: '0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9',
            serializedExtendedPrivateKey:
                'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9o' +
                'rSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe',
            serializedExtendedPublicKey:
                'xpub661MyMwAqRbcFEy9GqeVsL8JSDpJzF1VtP6h6vGGVidH3FPBFyU4' +
                'QFBMtod4CPTqxjGWZTW7pWCSGNyhup4Sdai4PrSqhpBM28st8ShhUJZ'
        });
    });
});
