import {
    getPublicKey,
    getFingerprint,
    getChecksum,
    deriveChildKeys,
    generateMasterKeys,
    getDerivedKeys,
    serializeExtendedKey
} from './hdKeys';
import { bufferToHex } from '../../utils/crypto/crypto';

const seed =
    '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882' +
    'ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af';
const masterPrivateKey = 'f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9';
const masterPublicKey = '0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9';
const masterChainCode = '463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b';
const childPrivateKey0 = '39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72';
const childPublicKey0 = '030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59';
const childChainCode0 = '05aae71d7c080474efaab01fa79e96f4c6cfe243237780b0df4bc36106228e31';
const childPrivateKey2147483648 = '7272904512add56fef94c7b4cfc62bedd0632afbad680f2eb404e95f2d84cbfa';
const childPublicKey2147483648 = '0355cff4a963ce259b08be9a864564caca210eb4eb35fcb75712e4bba7550efd95';
const childChainCode2147483648 = 'cb3c17166cc30eb7fdd11993fb7307531372e565cd7c7136cbfa4655622bc2be';
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

describe('hierarchical deterministic keys', () => {
    describe('getPublicKey', () => {
        it('should derive the master public key from the master private key', () => {
            const publicKey = bufferToHex(getPublicKey(masterPrivateKey));

            expect(publicKey).toBe(masterPublicKey);
        });
    });

    describe('generateMasterKeys', () => {
        it('should generate master keys', () => {
            const [privateKey, publicKey, chainCode] = generateMasterKeys(seed);

            expect(privateKey).toBe(masterPrivateKey);
            expect(publicKey).toBe(masterPublicKey);
            expect(chainCode).toBe(masterChainCode);
        });
    });

    describe('deriveChildKeys', () => {
        it('should derive normal child keys for index 0', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode
            );

            expect(childPrivateKey).toBe(childPrivateKey0);
            expect(childPublicKey).toBe(childPublicKey0);
            expect(childChainCode).toBe(childChainCode0);
        });

        it('should derive hardened child keys for index 2147483648', () => {
            const [childPrivateKey, childPublicKey, childChainCode] = deriveChildKeys(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                2147483648
            );

            expect(childPrivateKey).toBe(childPrivateKey2147483648);
            expect(childPublicKey).toBe(childPublicKey2147483648);
            expect(childChainCode).toBe(childChainCode2147483648);
        });
    });

    describe('createFingerprint', () => {
        it('should return fingerprint', () => {
            const fp = getFingerprint(masterPublicKey);

            expect(fp).toBe(fingerprint);
        });
    });

    describe('defineChecksum', () => {
        const depth = '00';
        const idx = '00000000';
        const fp = '00000000';

        it('should return checksum for serialized private key', () => {
            const version = '0488ade4';
            const key = `00${masterPrivateKey}`;
            const hex = version + depth + idx + fp + masterChainCode + key;

            const checksum = getChecksum(hex);

            expect(checksum).toBe('ce14d4d1');
        });

        it('should return checksum for serialized public key', () => {
            const version = '0488b21e';
            const hex = version + depth + idx + fp + masterChainCode + masterPublicKey;

            const checksum = getChecksum(hex);

            expect(checksum).toBe('405e5366');
        });
    });

    describe('serializeExtendedKey', () => {
        it('should serialize extended private key', () => {
            const serializedKey = serializeExtendedKey(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                'xprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyX);
        });

        it('should serialize extended public key', () => {
            const serializedKey = serializeExtendedKey(
                masterPublicKey,
                masterPublicKey,
                masterChainCode,
                'xpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyX);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                'yprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyY);
        });

        it('should serialize extended public key for BIP49', () => {
            const serializedKey = serializeExtendedKey(
                masterPublicKey,
                masterPublicKey,
                masterChainCode,
                'ypub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyY);
        });

        it('should serialize extended private key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                'zprv',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPrivateKeyZ);
        });

        it('should serialize extended public key for BIP84', () => {
            const serializedKey = serializeExtendedKey(
                masterPublicKey,
                masterPublicKey,
                masterChainCode,
                'zpub',
                undefined,
                undefined,
                '00000000'
            );

            expect(serializedKey).toBe(serializedPublicKeyZ);
        });

        it('should serialize child extended private key', () => {
            const serializedKey = serializeExtendedKey(masterPrivateKey, masterPublicKey, masterChainCode, 'xprv');

            expect(serializedKey).toBe(serializedChildPrivateKeyX);
        });

        it('should serialize child extended public key', () => {
            const serializedKey = serializeExtendedKey(masterPublicKey, masterPublicKey, masterChainCode, 'xpub');

            expect(serializedKey).toBe(serializedChildPublicKeyX);
        });

        it('should serialize hardened extended private key', () => {
            const serializedKey = serializeExtendedKey(
                childPrivateKey2147483648,
                childPublicKey2147483648,
                childChainCode2147483648,
                'xprv',
                1,
                2147483648,
                getFingerprint(masterPublicKey)
            );

            expect(serializedKey).toBe(
                'xprv9tuogRdjRCzepaR6L6kMhfmpe7VaYJUsj1avPe1aXnm72L9RQcjWUzPMWQ522v62K69oJToAH1NZdbn7cCigbyXfVitHdHrsayN2vk3sG1A'
            );
        });

        it('should trow error if version incorrect', () => {
            expect(() => {
                serializeExtendedKey(
                    masterPublicKey,
                    masterPublicKey,
                    masterChainCode,
                    'wpub',
                    undefined,
                    undefined,
                    '00000000'
                );
            }).toThrowError("Wrong version wpub. Accepts 'xprv', 'xpub', 'yprv', 'ypub', 'zprv' or 'zpub' only.");
        });
    });

    describe('getDerivedKeys', () => {
        it('should derive the same keys for m/', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(serializedPrivateKeyX);

            expect(serializedPrivateKey).toBe(serializedPrivateKeyX);
            expect(serializedPublicKey).toBe(serializedPublicKeyX);
            expect(derivationPath).toBe('/');
        });

        it('should derive the same keys for m/0', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                serializedPrivateKeyX,
                '0'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9tuogRdb5YTgcL3P8Waj7REqDuQx4sXcodQaWTtEVFEp6yRKh1CjrWfXChnhgHeLDuXxo2auDZegMiVMGGxwxcrb2PmiGyCngLxvLeGsZRq'
            );
            expect(serializedPublicKey).toBe(
                'xpub67uA5wAUuv1ypp7rEY7jUZBZmwFSULFUArLBJrHr3amnymkUEYWzQJz13zLacZv33sSuxKVmerpZeFExapBNt8HpAqtTtWqDQRAgyqSKUHu'
            );
            expect(derivationPath).toBe('0/');
        });

        it('should derive the same keys for m/0/0', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                serializedPrivateKeyX,
                '0/0'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9wtSarzK8pb7TDNVKraPNf3pESd62Xz7HT49oJEqAUWSVGUJgEjMj5RPTLP2uLYtwxmKSgJhYYPKSi4QRDWvCooWJhKPg7oXfzJy1Crippb'
            );
            expect(serializedPublicKey).toBe(
                'xpub6AsnzNXCyC9QfhSxRt7PjnzYnUTaRzhxefykbgeSip3RN4oTDn3cGsjsJadVGobz4HbjXyeAsf1miBbwoJF4Hae5G3m8bMJ2HF2Afy4HY5W'
            );
            expect(derivationPath).toBe('0/0/');
        });

        it('should derive serialized keys for path m/1', () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                serializedPrivateKeyX,
                '1'
            );

            expect(serializedPrivateKey).toBe(
                'xprv9tuogRdb5YTgfzj6e7EzQxwe8rb8NS9VLvQFP6MnQ6QTDrYksnucLqvjYrbEHnJFTXy5tmahm9zUv5BWfXZgDsKorRfELVnU5QMZDSqnZ5t'
            );
            expect(serializedPublicKey).toBe(
                'xpub67uA5wAUuv1ytUoZk8mzn6tNgtRcmtsLi9KrBUmPxRwS6esuRLDrteFDQ6eWbhm4NB4FBgubvwGiGrvGU2ACAgMJhGnK9qU9u3ETziQtRCS'
            );
            expect(derivationPath).toBe('1/');
        });

        it("should derive serialized keys for path m/44'/0'/0'/0", () => {
            const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
                serializedPrivateKeyX,
                "44'/0'/0'/0"
            );

            expect(serializedPrivateKey).toBe(
                'xprvA1b5BqCPyrzHyuSSdoE4aJHu5u2hK8G1ypiUgrjbTKf4dBDpjZd1m2NgcvYMHoNYdwoU77vXBUYYHuTZkkcinP4mpBbvngaBxPjXUM1QZi5'
            );
            expect(serializedPublicKey).toBe(
                'xpub6EaRbLjHpEYbCPWujpm4wSEddvsBiaysM3e5VF9D1fC3VyYyH6wGJphAUCZ68TaZxeur2tftGXKjQCznH1xMMsXyCJUsK1fHWSuExPHmUgy'
            );
            expect(derivationPath).toBe("44'/0'/0'/0/");
        });

        // it("should derive serialized keys for path m/44'/0'/0'/0", () => {
        //     const [serializedPrivateKey, serializedPublicKey, derivationPath] = getDerivedKeys(
        //         serializedPrivateKeyY,
        //         "44'/0'/0'/0"
        //     );
        //
        //     expect(serializedPrivateKey).toBe(
        //         'xprvA1b5BqCPyrzHyuSSdoE4aJHu5u2hK8G1ypiUgrjbTKf4dBDpjZd1m2NgcvYMHoNYdwoU77vXBUYYHuTZkkcinP4mpBbvngaBxPjXUM1QZi5'
        //     );
        //     expect(serializedPublicKey).toBe(
        //         'xpub6EaRbLjHpEYbCPWujpm4wSEddvsBiaysM3e5VF9D1fC3VyYyH6wGJphAUCZ68TaZxeur2tftGXKjQCznH1xMMsXyCJUsK1fHWSuExPHmUgy'
        //     );
        //     expect(derivationPath).toBe("44'/0'/0'/0/");
        // });
    });
});
