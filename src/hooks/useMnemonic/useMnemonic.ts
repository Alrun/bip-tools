import React from 'react';
import { byteArrayToHexString, cryptoSubtle, hexToBin, strToChunks } from '../../utils/crypto/crypto';

/**
 * BIP39 Mnemonic
 * @param hex String in hex
 */
const useMnemonic = (hex: string): [string[], string, string, boolean] => {
    const [checksum, setChecksum] = React.useState('');
    const raw = hexToBin(hex);
    const binChecksum = hexToBin(checksum);
    const list = strToChunks(raw, 11) || [];
    const listLastItem = list.length ? list[list.length - 1] : '';
    const sum = listLastItem.length !== 11 ? binChecksum.slice(listLastItem.length - 11) : '';

    list[list.length - 1] = `${listLastItem}${binChecksum}`.slice(0, 11);

    React.useEffect(() => {
        if (hex) {
            // Calculate checksum
            const strChunkList = strToChunks(hex, 2, '0') || [];
            const hexChunkList = strChunkList.map((item) => parseInt(item, 16));
            const hexByteArray = new Uint8Array(hexChunkList);

            (async () => {
                // Create hex digest using Web Crypto Api
                const digest = await cryptoSubtle.digest('SHA-256', hexByteArray);
                const hexChecksum = byteArrayToHexString(new Uint8Array(digest));

                setChecksum(hexChecksum);
            })();
        }
    }, [hex]);

    return [list, raw, sum, false];
};

export default useMnemonic;
