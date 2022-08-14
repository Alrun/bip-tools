import { GeneratorState } from '../../redux/slices/mnemonic/mnemonic.d';
import { wordCountList } from '../../libs/bip39/mnemonic/mnemonic';

export interface MnemonicGeneratorProps {
    /**
     * Randomness in hexadecimal format.
     */
    entropy: string;
    /**
     * Entropy checksum first bits.
     */
    checksum?: string;
    /**
     * Number of generated words.
     */
    wordCount: typeof wordCountList[number];
    /**
     * The callback fires when the number of words changes.
     *
     * @param {12, 15, 18, 21, 24} count Number of words.
     */
    onChangeWordCount: (count: GeneratorState['wordCount']) => void;
    /**
     * The callback fires when the entropy changes.
     *
     * @param {string} hex Hex entropy.
     */
    onChangeEntropy: (hex: string) => void;
}
