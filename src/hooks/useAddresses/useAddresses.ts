import React from 'react';
import { bufferToHex } from '../../utils/crypto/crypto';
import { getPublicKey, deriveChildKeys, decodeSerializedKey } from '../../libs/bip32/hdKeys';
import { getAddressKeys } from '../../libs/address/address';
import { AddressUnit } from '../../libs/address/address.d';
import { Script } from '../../libs/bips/bips.d';

export interface Address extends AddressUnit {
    path: string;
}

/**
 * Derives addresses.
 *
 * @param serializedExtendedPrivateKey Base58 string with extended serialized private key.
 * @param derivationPath Derivation path from the master key.
 * @param coin Coin type.
 * @param script Script used for encoding.
 * @param isHardened If 'true', the first index will be 2147483648.
 * @param startIndex Starting index of the first element of the list.
 * @param limit Number of list elements.
 */
const useAddresses = (
    serializedExtendedPrivateKey: string,
    derivationPath: string,
    coin?: string,
    script?: `${Script}`,
    isHardened = false,
    startIndex = 0,
    limit = 20
) => {
    const [addresses, setAddresses] = React.useState<Address[]>([]);

    React.useEffect(() => {
        if (serializedExtendedPrivateKey) {
            const { chainCode, key } = decodeSerializedKey(serializedExtendedPrivateKey);
            const version = serializedExtendedPrivateKey.slice(0, 4);
            const levels = derivationPath.split('/');
            const currentChildPrivateKey = key;
            const currentChildPublicKey = bufferToHex(getPublicKey(key));
            const currentChildChainCode = chainCode;
            const arr: Address[] = [];
            const start = (isHardened ? 2147483648 : 0) + startIndex;

            for (let i = start; i < limit + start; i += 1) {
                const [childPrivateKey] = deriveChildKeys(
                    currentChildPrivateKey,
                    currentChildPublicKey,
                    currentChildChainCode,
                    i
                );

                const { address, publicKey, privateKey } = getAddressKeys(childPrivateKey, version, script, coin);
                const idx = isHardened ? `${i - 2147483648}'` : i;

                arr.push({
                    path: `${levels.join('/')}/${idx}`,
                    address,
                    publicKey,
                    privateKey
                });
            }

            setAddresses(arr);
        }
    }, [serializedExtendedPrivateKey, derivationPath, script, isHardened, startIndex]);

    return addresses;
};

export default useAddresses;
