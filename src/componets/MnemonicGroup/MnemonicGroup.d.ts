import React from 'react';
import { WordList } from '../../redux/slices/mnemonic/mnemonic.d';

export interface MnemonicGroupProps {
    entropy: string;
    list: ReadonlyArray<string>;
    wordList: WordList[];
    expandedPanel: string[];
    onExpandPanel: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    onChangeGroup: (idx: number, val: string) => void;
}
