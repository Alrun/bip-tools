import React from 'react';
import { byteArrayToHexString, cryptoSubtle, hexToBin, strToChunks } from '../../utils/crypto/crypto';

type MType = {
    /**
     * List of bits.
     */
    list: Array<string>;
    /**
     * Raw binary.
     */
    raw: string;
    /**
     * Checksum of binary data.
     */
    checksum: string;
    /**
     * If true, the hook is in a loading state.
     */
    loading: boolean;
};

/**
 * BIP39 Mnemonic.
 * @param {string} hex String in hex.
 * @returns {MType}
 */
const useMnemonic = (hex: string): MType => {
    const [state, setState] = React.useState<MType>({
        list: [],
        raw: '',
        checksum: '',
        loading: false
    });

    React.useEffect(() => {
        if (hex) {
            const raw = hexToBin(hex);
            const list = strToChunks(raw, 11) || [];
            const listLastItem = list.length ? list[list.length - 1] : '';
            // Calculate checksum
            const strChunkList = strToChunks(hex, 2, '0') || [];
            const hexChunkList = strChunkList.map((item) => parseInt(item, 16));
            const hexByteArray = new Uint8Array(hexChunkList);

            (async () => {
                setState({ ...state, loading: true });
                // Create hex digest using Web Crypto Api
                const digest = await cryptoSubtle.digest('SHA-256', hexByteArray);
                const hexChecksum = byteArrayToHexString(new Uint8Array(digest));
                const binChecksum = hexToBin(hexChecksum);
                const checksum = listLastItem.length !== 11 ? binChecksum.slice(listLastItem.length - 11) : '';

                list[list.length - 1] = `${listLastItem}${binChecksum}`.slice(0, 11);
                setState({ list, raw, checksum, loading: false });
            })();
        }
    }, [hex]);

    return state;
};

export default useMnemonic;
