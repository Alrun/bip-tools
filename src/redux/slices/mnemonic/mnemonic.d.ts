import { getIndex, getWord, wordCountList } from '../../../libs/bip39/mnemonic/mnemonic';
import { Derivation, Mnemonic, WordList } from '../../../libs/bips/bips.d'

export interface MnemonicState extends Derivation, Mnemonic {
    /**
     * Derived path relative to master key.
     */
    path: string;
    /**
     * Word list.
     */
    wordList: WordList[];
    /**
     * List of expanded panels.
     */
    expandedPanel: string[];
    /**
     * Word count.
     */
    wordCount: typeof wordCountList[number];
    /**
     * If 'true', balances are shown.
     */
    showBalances: boolean
}
