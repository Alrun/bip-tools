import {
    getPublicKey,
    getFingerprint,
    getChecksum,
    deriveChildKeys,
    generateMasterKeys,
    getDerivedKeys,
    serializeExtendedKey,
    decodeSerializedKey
} from './hdKeys';
import { bufferToHex } from '../../utils/crypto/crypto';

const SEED =
    '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882' +
    'ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af';
const MASTER_PRIVATE_KEY = 'f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9';
const MASTER_PUBLIC_KEY = '0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9';
const MASTER_PUBLIC_KEY_UNCOMPRESSED =
    '0452c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da' +
    '9e31e8d2571464198117614b47ddb7238c7c9d3706c3d05daf937e2c387b49c6e';
const MASTER_CHAIN_CODE = '463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b';
const CHILD_PRIVATE_KEY_0 = '39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72';
const CHILD_PUBLIC_KEY_0 = '030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59';
const CHILD_CHAIN_CODE_0 = '05aae71d7c080474efaab01fa79e96f4c6cfe243237780b0df4bc36106228e31';
const CHILD_PRIVATE_KEY_2147483648 = '7272904512add56fef94c7b4cfc62bedd0632afbad680f2eb404e95f2d84cbfa';
const CHILD_PUBLIC_KEY_2147483648 = '0355cff4a963ce259b08be9a864564caca210eb4eb35fcb75712e4bba7550efd95';
const CHILD_CHAIN_CODE_2147483648 = 'cb3c17166cc30eb7fdd11993fb7307531372e565cd7c7136cbfa4655622bc2be';
const FINGERPRINT = '018c1259';
const SERIALIZED_PRIVATE_KEY_X =
    'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT42iS9' +
    'orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe';
const SERIALIZED_PUBLIC_KEY_X =
    'xpub661MyMwAqRbcFEy9GqeVsL8JSDpJzF1VtP6h6vGGVidH3FPBFyU' +
    '4QFBMtod4CPTqxjGWZTW7pWCSGNyhup4Sdai4PrSqhpBM28st8ShhUJZ';
const SERIALIZED_CHILD_PRIVATE_KEY_X =
    'xprv9s2fpe7ZsEngmCg6uoS65DZLzwfxpikdxMFjJJm6ewhyKo7vvuTj' +
    'NENJWszu41uopC2wJJdeuMBodZY8BNJPhe2D11kTXgL2QWGs4ympado';
const SERIALIZED_CHILD_PUBLIC_KEY_X =
    'xpub6622E9eThcLyygka1py6SMW5YyWTEBUVKaBL6hAiDHExCbT5USmy' +
    'v2gnN7n52DhcPMjDmMBChhQDZiifxziGjpUwaU1jRLq172PimuTTi96';
const SERIALIZED_PRIVATE_KEY_Y =
    'yprvABrGsX5C9jant45o1Au7iHH54A8GXQH9SGhK5vkYKPUBDYsFy6KN' +
    'UWX24moUE6KxoCh2qtZ8UpLaDWQiqt4aPdvvgjszQ4VrbLpfp5patGg';
const SERIALIZED_PUBLIC_KEY_Y =
    'ypub6QqdH2c5z7966YAG7CS85RDocBxkvrzzoVcutKA9sj1A6MCQWddd' +
    '2JqVv1aeCJ7mNNPKJw6gHAYz9fbGdWUTRpPfGC9GHizqHrwXWzzTmRy';
const SERIALIZED_PRIVATE_KEY_Z =
    'zprvAWgYBBk7JR8GjMGuqXgjvNNaE8GiU2GeMPDXsKeRhPr4GegVDkU' +
    'w6aBA5ym4DzytCqoqbN9gwUh86o2HZaUbBscXZ5aQyyKLs4tKCeThpsa';
const SERIALIZED_PUBLIC_KEY_Z =
    'zpub6jftahH18ngZwqMNwZDkHWKJnA7CsUzVic98fi43FjP39T1dmHoB' +
    'eNVdwDYECCmgn1W84QhEjpuY2xCqMCtUE45G8XqgsdpKZb1AuaQN7mE';

describe('hierarchical deterministic keys', () => {
    describe('getPublicKey', () => {
        it('should derive the compressed master public key from the master private key', () => {
            const publicKey = bufferToHex(getPublicKey(MASTER_PRIVATE_KEY));

            expect(publicKey).toBe(MASTER_PUBLIC_KEY);
        });

        it('should derive the uncompressed master public key from the master private key', () => {
            const publicKey = bufferToHex(getPublicKey(MASTER_PRIVATE_KEY, false));

            expect(publicKey).toBe(MASTER_PUBLIC_KEY_UNCOMPRESSED);
        });
    });

    describe('generateMasterKeys', () => {
        it('should generate master keys', () => {
            const [privateKey, publicKey, chainCode] = generateMasterKeys(SEED);

            expect(privateKey).toBe(MASTER_PRIVATE_KEY);
            expect(publicKey).toBe(MASTER_PUBLIC_KEY);
            expect(chainCode).toBe(MASTER_CHAIN_CODE);
        });
    });

    describe('deriveChildKeys', () => {
        it('should derive normal child keys for index 0', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE
            );

            expect(childPrivateKey).toBe(CHILD_PRIVATE_KEY_0);
            expect(childPublicKey).toBe(CHILD_PUBLIC_KEY_0);
            expect(childChainCode).toBe(CHILD_CHAIN_CODE_0);
        });

        it('should derive hardened child keys for index 2147483648', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                2147483648
            );

            expect(childPrivateKey).toBe(CHILD_PRIVATE_KEY_2147483648);
            expect(childPublicKey).toBe(CHILD_PUBLIC_KEY_2147483648);
            expect(childChainCode).toBe(CHILD_CHAIN_CODE_2147483648);
        });
    });

    describe('createFingerprint', () => {
        it('should return fingerprint', () => {
            const fp = getFingerprint(MASTER_PUBLIC_KEY);

            expect(fp).toBe(FINGERPRINT);
        });
    });

    describe('defineChecksum', () => {
        const depth = '00';
        const idx = '00000000';
        const fp = '00000000';

        it('should return checksum for serialized private key', () => {
            const version = '0488ade4';
            const key = `00${MASTER_PRIVATE_KEY}`;
            const hex = version + depth + idx + fp + MASTER_CHAIN_CODE + key;

            const checksum = getChecksum(hex);

            expect(checksum).toBe('ce14d4d1');
        });

        it('should return checksum for serialized public key', () => {
            const version = '0488b21e';
            const hex = version + depth + idx + fp + MASTER_CHAIN_CODE + MASTER_PUBLIC_KEY;

            const checksum = getChecksum(hex);

            expect(checksum).toBe('405e5366');
        });
    });

    describe('serializeExtendedKey', () => {
        it('should serialize extended private key', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'xprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PRIVATE_KEY_X);
        });

        it('should serialize extended public key', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PUBLIC_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'xpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PUBLIC_KEY_X);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'yprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PRIVATE_KEY_Y);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PUBLIC_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'ypub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PUBLIC_KEY_Y);
        });

        it('should serialize extended private key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'zprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PRIVATE_KEY_Z);
        });

        it('should serialize extended public key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PUBLIC_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'zpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(SERIALIZED_PUBLIC_KEY_Z);
        });

        it('should serialize child extended private key', () => {
            const serializedKey = serializeExtendedKey(
                MASTER_PRIVATE_KEY,
                MASTER_PUBLIC_KEY,
                MASTER_CHAIN_CODE,
                'xprv'
            );

            expect(serializedKey).toBe(SERIALIZED_CHILD_PRIVATE_KEY_X);
        });

        it('should serialize child extended public key', () => {
            const serializedKey = serializeExtendedKey(MASTER_PUBLIC_KEY, MASTER_PUBLIC_KEY, MASTER_CHAIN_CODE, 'xpub');

            expect(serializedKey).toBe(SERIALIZED_CHILD_PUBLIC_KEY_X);
        });

        it('should serialize hardened extended private key', () => {
            const serializedKey = serializeExtendedKey(
                CHILD_PRIVATE_KEY_2147483648,
                CHILD_PUBLIC_KEY_2147483648,
                CHILD_CHAIN_CODE_2147483648,
                'xprv',
                1,
                2147483648,
                getFingerprint(MASTER_PUBLIC_KEY)
            );

            expect(serializedKey).toBe(
                'xprv9tuogRdjRCzepaR6L6kMhfmpe7VaYJUsj1avPe1aXnm72L9RQcjW' +
                    'UzPMWQ522v62K69oJToAH1NZdbn7cCigbyXfVitHdHrsayN2vk3sG1A'
            );
        });

        it('should trow error if version incorrect', () => {
            expect(() => {
                serializeExtendedKey(
                    MASTER_PUBLIC_KEY,
                    MASTER_PUBLIC_KEY,
                    MASTER_CHAIN_CODE,
                    'wpub',
                    undefined,
                    undefined,
                    '00000000'
                );
            }).toThrowError("Wrong version wpub. Accepts 'xprv', 'xpub', 'yprv', 'ypub', 'zprv' or 'zpub' only.");
        });
    });

    describe('decodeSerializedKey', () => {
        it('should return an object with empty properties if the key is empty', () => {
            const decoded = decodeSerializedKey('');

            expect(decoded).toEqual({
                chainCode: '',
                checksum: '',
                depth: '',
                fingerprint: '',
                index: '',
                key: '',
                version: ''
            });
        });

        it('should return an object with decoded values', () => {
            const { version, depth, fingerprint, index, chainCode, key, checksum } =
                decodeSerializedKey(SERIALIZED_PRIVATE_KEY_X);

            expect(version).toBe('0488ade4');
            expect(depth).toBe('00');
            expect(fingerprint).toBe('00000000');
            expect(index).toBe('00000000');
            expect(chainCode).toBe(MASTER_CHAIN_CODE);
            expect(key).toBe(MASTER_PRIVATE_KEY);
            expect(checksum).toBe('ce14d4d1');
        });

        it("shouldn't throw an error message", () => {
            expect(() => decodeSerializedKey(SERIALIZED_PRIVATE_KEY_X, true)).not.toThrowError(
                'Invalid serialized key!'
            );
        });

        it('should throw an error message', () => {
            const invalidKey =
                'xprv9s21ZrQH143K2ktgAp7VWCBZtBypanHeXAB6JXrewP6JAT41iS9' +
                'orSrt3ZqtEBg3PZaE6Qxa29z2LDoA8BeZbQFKpQBZp9gNKcm2RYWojTe';

            expect(() => decodeSerializedKey(invalidKey, true)).toThrowError('Invalid serialized key!');
        });
    });

    describe('getDerivedKeys', () => {
        it('should derive an empty array if the input key is empty', () => {
            const keys = getDerivedKeys('');

            expect(keys).toEqual([]);
        });

        it('should derive the same keys for m/', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] =
                getDerivedKeys(SERIALIZED_PRIVATE_KEY_X);

            expect(serializedPrivateKey).toBe(SERIALIZED_PRIVATE_KEY_X);
            expect(serializedPublicKey).toBe(SERIALIZED_PUBLIC_KEY_X);
            expect(derivationPath).toBe('/');
        });

        it('should derive the same keys for m/0', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                SERIALIZED_PRIVATE_KEY_X,
                '0'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9tuogRdb5YTgcL3P8Waj7REqDuQx4sXcodQaWTtEVFEp6yRKh1C' +
                    'jrWfXChnhgHeLDuXxo2auDZegMiVMGGxwxcrb2PmiGyCngLxvLeGsZRq'
            );
            expect(serializedPublicKey).toBe(
                'xpub67uA5wAUuv1ypp7rEY7jUZBZmwFSULFUArLBJrHr3amnymkUEYW' +
                    'zQJz13zLacZv33sSuxKVmerpZeFExapBNt8HpAqtTtWqDQRAgyqSKUHu'
            );
            expect(derivationPath).toBe('0/');
        });

        it('should derive the same keys for m/0/0', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                SERIALIZED_PRIVATE_KEY_X,
                '0/0'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9wtSarzK8pb7TDNVKraPNf3pESd62Xz7HT49oJEqAUWSVGUJgEj' +
                    'Mj5RPTLP2uLYtwxmKSgJhYYPKSi4QRDWvCooWJhKPg7oXfzJy1Crippb'
            );
            expect(serializedPublicKey).toBe(
                'xpub6AsnzNXCyC9QfhSxRt7PjnzYnUTaRzhxefykbgeSip3RN4oTDn3' +
                    'cGsjsJadVGobz4HbjXyeAsf1miBbwoJF4Hae5G3m8bMJ2HF2Afy4HY5W'
            );
            expect(derivationPath).toBe('0/0/');
        });

        it('should derive serialized keys for path m/1', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                SERIALIZED_PRIVATE_KEY_X,
                '1'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9tuogRdb5YTgfzj6e7EzQxwe8rb8NS9VLvQFP6MnQ6QTDrYksnuc' +
                    'LqvjYrbEHnJFTXy5tmahm9zUv5BWfXZgDsKorRfELVnU5QMZDSqnZ5t'
            );
            expect(serializedPublicKey).toBe(
                'xpub67uA5wAUuv1ytUoZk8mzn6tNgtRcmtsLi9KrBUmPxRwS6esuRLDr' +
                    'teFDQ6eWbhm4NB4FBgubvwGiGrvGU2ACAgMJhGnK9qU9u3ETziQtRCS'
            );
            expect(derivationPath).toBe('1/');
        });

        it("should derive serialized keys for path m/44'/0'/0'/0", () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                SERIALIZED_PRIVATE_KEY_X,
                "44'/0'/0'/0"
            );

            expect(serializedPrivateKey).toBe(
                'xprvA1b5BqCPyrzHyuSSdoE4aJHu5u2hK8G1ypiUgrjbTKf4dBDpjZd1' +
                    'm2NgcvYMHoNYdwoU77vXBUYYHuTZkkcinP4mpBbvngaBxPjXUM1QZi5'
            );
            expect(serializedPublicKey).toBe(
                'xpub6EaRbLjHpEYbCPWujpm4wSEddvsBiaysM3e5VF9D1fC3VyYyH6wG' +
                    'JphAUCZ68TaZxeur2tftGXKjQCznH1xMMsXyCJUsK1fHWSuExPHmUgy'
            );
            expect(derivationPath).toBe("44'/0'/0'/0/");
        });
    });
});
