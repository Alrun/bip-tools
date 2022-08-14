import React from 'react';
import { WordList } from '../../redux/slices/mnemonic/mnemonic.d';

export interface MnemonicGroupProps {
    /**
     * Randomness in hex format.
     */
    entropy: string;
    /**
     * Generated list of words.
     */
    list: ReadonlyArray<string>;
    /**
     * Wordlist.
     */
    wordList: WordList[];
    /**
     * List of expanded panels.
     */
    expandedPanel: string[];
    /**
     * Callback fired when the panel is expanded/collapsed.
     *
     * @param {string} panel Panel ID.
     */
    onExpandPanel: (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => void;
    /**
     * The callback fires when the group element changes.
     *
     * @param {number} idx Element index.
     * @param {string} val Element value.
     */
    onChangeGroup: (idx: number, val: string) => void;
}
