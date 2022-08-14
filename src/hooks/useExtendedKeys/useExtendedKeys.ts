import React from 'react';
import { generateMasterKeys, serializeExtendedKey } from '../../libs/bip32/hdKeys';

interface ExtendedKeys {
    masterPrivateKey: string;
    masterPublicKey: string;
    masterChainCode: string;
    serializedExtendedPrivateKey: string;
    serializedExtendedPublicKey: string;
}

const initialState: ExtendedKeys = {
    masterPrivateKey: '',
    masterPublicKey: '',
    masterChainCode: '',
    serializedExtendedPrivateKey: '',
    serializedExtendedPublicKey: ''
};

/**
 * Generates hierarchical deterministic keys from seed.
 *
 * @param {string} seed 64-bit hex string.
 */
const useExtendedKeys = (seed: string): ExtendedKeys => {
    const [extendedKey, setExtendedKey] = React.useState(initialState);

    React.useEffect(() => {
        if (seed && seed.length === 128) {
            const [masterPrivateKey, masterPublicKey, masterChainCode] = generateMasterKeys(seed);

            const serializedExtendedPrivateKey = serializeExtendedKey(
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                'xprv',
                undefined,
                undefined,
                '00000000'
            );

            const serializedExtendedPublicKey = serializeExtendedKey(
                masterPublicKey,
                masterPublicKey,
                masterChainCode,
                'xpub',
                undefined,
                undefined,
                '00000000'
            );

            setExtendedKey({
                masterPrivateKey,
                masterPublicKey,
                masterChainCode,
                serializedExtendedPrivateKey,
                serializedExtendedPublicKey
            });
        } else {
            setExtendedKey(initialState);
        }
    }, [seed]);

    return extendedKey;
};

export default useExtendedKeys;
