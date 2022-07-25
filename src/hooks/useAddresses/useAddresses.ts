import React from 'react';
import bs58 from 'bs58';
import { bufferToHex, hexToBuffer } from '../../utils/crypto/crypto';
import { getPublicKey, getChecksum, deriveChildKeys, decodeSerializedKey } from '../../libs/bip32/hdKeys';
import { Script } from '../../libs/bips/bips.d';
import { getAddress } from '../../libs/bips/bips';

export interface AddressInterface {
    path: string;
    address: string;
    publicKey: string;
    privateKey: string;
}

const useAddresses = (
    serializedExtendedPrivateKey: string,
    derivationPath: string,
    script?: any,
    isHardened = false,
    startIndex = 0,
    limit = 20
) => {
    const [addresses, setAddresses] = React.useState<AddressInterface[]>([]);

    React.useEffect(() => {
        if (serializedExtendedPrivateKey) {
            const { chainCode, key } = decodeSerializedKey(serializedExtendedPrivateKey);
            const version = serializedExtendedPrivateKey.slice(0, 4);
            const levels = derivationPath.split('/');
            const tempChildPrivateKey = key;
            const tempChildPublicKey = bufferToHex(getPublicKey(key));
            const tempChildChainCode = chainCode;
            const arr: any[] = [];
            const start = (isHardened ? 2147483648 : 0) + startIndex;
            /**
             * Version byte prefix.
             * 0x80 = Mainnet
             * 0xEF = Testnet
             */
            const versionByte = '80';
            // Compression Byte suffix (optional)
            const compressionByte = '01';

            for (let i = start; i < limit + start; i += 1) {
                const [childPrivateKey, childPublicKey] = deriveChildKeys(
                    tempChildPrivateKey,
                    tempChildPublicKey,
                    tempChildChainCode,
                    i
                );
                const idx = isHardened ? `${i - 2147483648}'` : i;

                const privateKeyWithVersion = `${versionByte}${childPrivateKey}${compressionByte}`;
                const privateKeyChecksum = getChecksum(privateKeyWithVersion);

                let address;

                if (version === 'yprv') {
                    address = getAddress(childPublicKey, Script.P2WPKHP2SH);
                } else if (version === 'zprv') {
                    address = getAddress(childPublicKey, Script.P2WPKH);
                } else {
                    address = getAddress(childPublicKey, script);
                }

                arr.push({
                    path: `${levels.join('/')}/${idx}`,
                    address,
                    publicKey: childPublicKey,
                    privateKey: bs58.encode(hexToBuffer(`${privateKeyWithVersion}${privateKeyChecksum}`))
                });
            }

            setAddresses(arr);
        }
    }, [serializedExtendedPrivateKey, derivationPath, script, isHardened, startIndex]);

    return addresses;
};

export default useAddresses;
