import React from 'react';
import { getDerivedKeys } from '../../libs/bip32/hdKeys';
import { Bip } from '../../libs/bips/bips.d';

interface DerivationKeys {
    extendedDerivedPrivateKey: string;
    extendedDerivedPublicKey: string;
}

const initialState: DerivationKeys = {
    extendedDerivedPrivateKey: '',
    extendedDerivedPublicKey: ''
};

/**
 * Gets derived extended serialized keys.
 *
 * @param {string} serializedExtendedPrivateKey Base58 string with extended serialized private key.
 * @param {Bip} bip Type of BIP.
 * @param {string} derivationPath Derived path.
 */
const useDerivationKeys = (serializedExtendedPrivateKey: string, bip: Bip, derivationPath = ''): DerivationKeys => {
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
