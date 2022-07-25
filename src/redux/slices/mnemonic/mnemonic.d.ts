import { getIndex, getWord, wordCountList } from '../../../libs/bip39/mnemonic/mnemonic';
import { BipType, Script } from '../../../libs/bips.d'

export interface WordList {
    id: number;
    wordBinary: string;
    wordIndex: string;
    wordString: string;
}

export interface GeneratorState {
    entropy: string;
    seed: string;
    passphrase: string;
    wordList: WordList[];
    expandedPanel: string[];
    wordCount: typeof wordCountList[number];
    derivationPath: string;
    path: string;
    bip: BipType;
    coinType: string;
    isHardened: boolean;
    script: `${Script}`
}
