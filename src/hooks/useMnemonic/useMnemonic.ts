import React from 'react';
import { getChecksum } from '../../libs/bip39/mnemonic/mnemonic';

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
        checksum: ''
    });

    React.useEffect(() => {
        if (hex) {
            const { list, raw, checksum } = getChecksum(hex);

            setState({ list, raw, checksum });
        }
    }, [hex]);

    return state;
};

export default useMnemonic;
