import { renderHook } from '@testing-library/react-hooks';
import useExtendedKeys, {
    createFingerprint,
    defineChecksum,
    deriveChildKeys,
    deriveExtendedPublicKey,
    generateMasterKeys,
    serializeExtendedKey
} from './useExtendedKeys';

const seed =
    '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882' +
    'ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af';
const privateKey = 'f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9';
const publicKey = '0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9';
const chainCode = '463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b';
const childPrivateKey0 = '39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72';
const childPublicKey0 = '030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59';
const childChainCode0 = '05aae71d7c080474efaab01fa79e96f4c6cfe243237780b0df4bc36106228e31';
const childPrivateKey2147483648 = '7272904512add56fef94c7b4cfc62bedd0632afbad680f2eb404e95f2d84cbfa';
const childPublicKey2147483648 = '0355cff4a963ce259b08be9a864564caca210eb4eb35fcb75712e4bba7550efd95';
const childChainCode2147483648 = 'cb3c17166cc30eb7fdd11993fb7307531372e565cd7c7136cbfa4655622bc2be';
const extendedPublicKey = '02b22433d56bd7339701f3d9ccd2a591448347f507de8d6e3b01dd1d7f24f8e026';
const extendedChainCode = 'aa736518b90482d147571b4e5e05339957b7a2e6b7ea6c9af7b8919b9a63dbca';
const fingerprint = '018c1259';
const serializedPrivateKeyX =
    'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9' +
    'orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe';
const serializedPublicKeyX =
    'xpub661MyMwAqRbcFEy9GqeVsL8JSDpJzF1VtP6h6vGGVidH3FPBFyU' +
    '4QFBMtod4CPTqxjGWZTW7pWCSGNyhup4Sdai4PrSqhpBM28st8ShhUJZ';
const serializedChildPrivateKeyX =
    'xprv9s2fpe7ZsEngmCg6uoS65DZLzwfxpikdxMFjJJm6ewhyKo7vvuTj' +
    'NENJWszu41uopC2wJJdeuMBodZY8BNJPhe2D11kTXgL2QWGs4ympado';
const serializedChildPublicKeyX =
    'xpub6622E9eThcLyygka1py6SMW5YyWTEBUVKaBL6hAiDHExCbT5USmy' +
    'v2gnN7n52DhcPMjDmMBChhQDZiifxziGjpUwaU1jRLq172PimuTTi96';
const serializedPrivateKeyY =
    'yprvABrGsX5C9jant45o1Au7iHH54A8GXQH9SGhK5vkYKPUBDYsFy6KN' +
    'UWX24moUE6KxoCh2qtZ8UpLaDWQiqt4aPdvvgjszQ4VrbLpfp5patGg';
const serializedPublicKeyY =
    'ypub6QqdH2c5z7966YAG7CS85RDocBxkvrzzoVcutKA9sj1A6MCQWddd' +
    '2JqVv1aeCJ7mNNPKJw6gHAYz9fbGdWUTRpPfGC9GHizqHrwXWzzTmRy';
const serializedPrivateKeyZ =
    'zprvAWgYBBk7JR8GjMGuqXgjvNNaE8GiU2GeMPDXsKeRhPr4GegVDkU' +
    'w6aBA5ym4DzytCqoqbN9gwUh86o2HZaUbBscXZ5aQyyKLs4tKCeThpsa';
const serializedPublicKeyZ =
    'zpub6jftahH18ngZwqMNwZDkHWKJnA7CsUzVic98fi43FjP39T1dmHoB' +
    'eNVdwDYECCmgn1W84QhEjpuY2xCqMCtUE45G8XqgsdpKZb1AuaQN7mE';

describe('useDeriveKeys', () => {
    describe('generateMasterKeys', () => {
        it('should generate compressed master keys', () => {
            const [masterPrivateKey, masterPublicKey, masterChainCode] = generateMasterKeys(seed);

            expect(masterPrivateKey).toBe(privateKey);
            expect(masterPublicKey).toBe(publicKey);
            expect(masterChainCode).toBe(chainCode);
        });
    });

    describe('deriveChildKeys', () => {
        it('should derive normal child keys for index 0', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(privateKey, publicKey, chainCode);

            expect(childPrivateKey).toBe(childPrivateKey0);
            expect(childPublicKey).toBe(childPublicKey0);
            expect(childChainCode).toBe(childChainCode0);
        });

        it('should derive hardened child keys for index 2147483648', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                privateKey,
                publicKey,
                chainCode,
                2147483648
            );

            expect(childPrivateKey).toBe(childPrivateKey2147483648);
            expect(childPublicKey).toBe(childPublicKey2147483648);
            expect(childChainCode).toBe(childChainCode2147483648);
        });
    });

    describe('deriveExtendedPublicKey', () => {
        it('should derive extended keys for index 0', () => {
            const [childPublicKey, childChainCode] = deriveExtendedPublicKey(publicKey, chainCode, 2147483647);

            expect(childPublicKey).toBe(extendedPublicKey);
            expect(childChainCode).toBe(extendedChainCode);
        });

        it('should throw error if index >= 2147483648', () => {
            expect(() => {
                deriveExtendedPublicKey(publicKey, chainCode, 2147483648);
            }).toThrowError("Can't create hardened child public keys from parent public keys.");
        });
    });

    describe('createFingerprint', () => {
        it('should return fingerprint', () => {
            const fp = createFingerprint(publicKey);

            expect(fp).toBe(fingerprint);
        });
    });

    describe('defineChecksum', () => {
        const depth = '00';
        const idx = '00000000';
        const fp = '00000000';

        it('should return checksum for serialized private key', () => {
            const version = '0488ade4';
            const key = `00${privateKey}`;
            const hex = version + depth + idx + fp + chainCode + key;

            const cs = defineChecksum(hex);

            expect(cs).toBe('ce14d4d1');
        });

        it('should return checksum for serialized public key', () => {
            const version = '0488b21e';
            const hex = version + depth + idx + fp + chainCode + publicKey;

            const cs = defineChecksum(hex);

            expect(cs).toBe('405e5366');
        });
    });

    describe('serializeExtendedKey', () => {
        it('should serialize extended private key', () => {
            const serializedKey = serializeExtendedKey(
                privateKey,
                publicKey,
                chainCode,
                'xprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyX);
        });

        it('should serialize extended public key', () => {
            const serializedKey = serializeExtendedKey(
                publicKey,
                publicKey,
                chainCode,
                'xpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyX);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                privateKey,
                publicKey,
                chainCode,
                'yprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyY);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                publicKey,
                publicKey,
                chainCode,
                'ypub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyY);
        });

        it('should serialize extended private key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                privateKey,
                publicKey,
                chainCode,
                'zprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyZ);
        });

        it('should serialize extended public key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                publicKey,
                publicKey,
                chainCode,
                'zpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyZ);
        });

        it('should serialize child extended private key', () => {
            const serializedKey = serializeExtendedKey(
                privateKey,
                publicKey,
                chainCode,
                'xprv'
            );

            expect(serializedKey).toBe(serializedChildPrivateKeyX);
        });

        it('should serialize child extended public key', () => {
            const serializedKey = serializeExtendedKey(
                publicKey,
                publicKey,
                chainCode,
                'xpub'
            );

            expect(serializedKey).toBe(serializedChildPublicKeyX);
        });

        it('should trow error if version incorrect', () => {
            expect(() => {
                serializeExtendedKey(publicKey, publicKey, chainCode, 'wpub', undefined, undefined, '00000000');
            }).toThrowError("Wrong version wpub. Accepts 'xprv', 'xpub', 'yprv', 'ypub', 'zprv' or 'zpub' only.");
        });
    });

    describe('useDeriveKeys hook', () => {
        it('should derive keys', () => {
            const { result } = renderHook(() => useExtendedKeys(seed));

            // expect(result.current).toBe('light');
        });
    });
});
