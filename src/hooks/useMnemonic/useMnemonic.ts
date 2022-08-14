import React from 'react';
import { getMnemonicList } from '../../libs/bip39/mnemonic/mnemonic';

interface MnemonicList {
    /**
     * List of bits.
     */
    list: string[];
    /**
     * Raw binary.
     */
    raw: string;
    /**
     * Checksum of binary data.
     */
    checksum: string;
}

/**
 * Converts entropy to a list of mnemonic phrase bits.
 *
 * @param {string} entropy Entropy value in hex.
 * @returns {MnemonicList}
 */
const useMnemonic = (entropy: string): MnemonicList => {
    const [state, setState] = React.useState<MnemonicList>({
        list: [],
        raw: '',
        checksum: ''
    });

    React.useEffect(() => {
        if (entropy) {
            const { list, raw, checksum } = getMnemonicList(entropy);

            setState({ list, raw, checksum });
        }
    }, [entropy]);

    return state;
};

export default useMnemonic;
