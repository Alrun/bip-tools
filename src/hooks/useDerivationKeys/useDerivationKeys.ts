import React from 'react';
import { getDerivedKeys } from '../../libs/bip32/hdKeys';
import { BipType } from '../../libs/bips/bips.d';

interface DerivationKeys {
    extendedDerivedPrivateKey: string;
    extendedDerivedPublicKey: string;
}

const initialState: DerivationKeys = {
    extendedDerivedPrivateKey: '',
    extendedDerivedPublicKey: ''
};

const useDerivationKeys = (serializedExtendedPrivateKey: string, bip: BipType, derivationPath = ''): DerivationKeys => {
    const [extendedKeys, setExtendedKeys] = React.useState(initialState);

    React.useEffect(() => {
        if (serializedExtendedPrivateKey && serializedExtendedPrivateKey.length === 111) {
            const [extendedDerivedPrivateKey, extendedDerivedPublicKey] = getDerivedKeys(
                serializedExtendedPrivateKey,
                derivationPath,
                bip
            );

            setExtendedKeys({
                extendedDerivedPrivateKey,
                extendedDerivedPublicKey
            });
        }
    }, [serializedExtendedPrivateKey, derivationPath]);

    return extendedKeys;
};

export default useDerivationKeys;

// const { version, depth, fingerprint, index, chainCode, key } = decodeSerializedKey(extendedPrivateKey);
//
// const privateKey = key.slice(2);
// const publicKey = bufferToHex(getPublicKey(privateKey, true));
// const [tempChildPrivateKey0, tempChildPublicKey0, tempChildChainCode0, derivationPath0] = getDerivedKeys(privateKeyFromSerialized, publicKey, chainCode, '/0')

// console.log('dp ', derivationPath);
// console.log('serKey ', serKey);

// console.log('def fp ', createFingerprint('028c2087c884ee1b7d31692eed0f68287911d6408cc46901813e583e70db609256'));

/* m
priv  f79bb0d317b310b261a55a8ab393b4c8a1aba6fa4d08aef379caba502d5d67f9
pub   0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9
chain 463223aac10fb13f291a1bc76bc26003d98da661cb76df61e750c139826dea8b
curFp 00000000

m/0
priv  39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72
pub   030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59
chain 05aae71d7c080474efaab01fa79e96f4c6cfe243237780b0df4bc36106228e31
curFp 018c1259 (0252c616d91a2488c1fd1f0f172e98f7d1f6e51f8f389b2f8d632a8b490d5f6da9)

m/0/0
priv  f30337b84b17935416fcdefd31086fb37ede9ec94c11502304740459322f1ac6
pub   028c2087c884ee1b7d31692eed0f68287911d6408cc46901813e583e70db609256
chain dd4d0c831c0564aa462e58eaeabec608b55b9c31b927a62c9796c8c57b5d1bea
curFp 9680603f (030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59)

m/0/0/0/
priv  3db2b9d3a87a8c717abef0cbca8df2c8a3402d79206fa96a43897c7f8fecf92c
pub   02d632eb82be12958aeac6e5a5f731d4d0fff0ce6f71bb3ac004c7a376916f830b
chain 6155b7cbd6cabe497ad4091927212bec9879cc25a4851cfc624d848fcd5d6c09
curFp fc1eb2fc (028c2087c884ee1b7d31692eed0f68287911d6408cc46901813e583e70db609256)
 */

// const serializedKey1 = serializeExtendedKey(
//     tempChildPrivateKey,
//
//     // publicKey,
//     // tempChildPublicKey,
//     bufferToHex(getPublicKey('39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72', true)),
//
//
//     tempChildChainCode,
//         'xprv',
//         '03',
//         0,
//         // '018c1259'
//         // '018c1259'
//     );

// console.log('pub0 ', bufferToHex(getPublicKey('3db2b9d3a87a8c717abef0cbca8df2c8a3402d79206fa96a43897c7f8fecf92c', true)),);
// console.log('priv ', tempChildPrivateKey);
// console.log('pub ', tempChildPublicKey);
// console.log('chain ', tempChildChainCode);
// console.log('privSer ', privateKeyFromSerialized);
// console.log('pubSer ', publicKey);
// console.log(serializedKey1);
