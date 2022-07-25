import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneratorState } from './mnemonic.d';
import { Bips, Script } from '../../../libs/bips/bips.d';
import { getPath } from '../../../libs/bips/bips';

const initialPath = "0'/0";

const initialState: GeneratorState = {
    entropy: '',
    seed: '',
    passphrase: '',
    wordList: [],
    expandedPanel: [],
    wordCount: 12,
    derivationPath: `${Bips.Bip44}/0'/0'/0`,
    path: initialPath,
    script: Script.P2PKH,
    bip: 'bip44',
    coinType: '0',
    isHardened: false
};

export const mnemonic = createSlice({
    name: 'mnemonic',
    initialState,
    reducers: {
        setEntropy: (state, { payload }: PayloadAction<GeneratorState['entropy']>) => {
            state.entropy = payload;
        },
        setSeed: (state, { payload }: PayloadAction<GeneratorState['seed']>) => {
            state.seed = payload;
        },
        setPassphrase: (state, { payload }: PayloadAction<GeneratorState['passphrase']>) => {
            state.passphrase = payload;
        },
        setWordList: (state, { payload }: PayloadAction<GeneratorState['wordList']>) => {
            state.wordList = payload;
        },
        setExpandedPanel: (state, { payload }: PayloadAction<string>) => {
            state.expandedPanel = state.expandedPanel.includes(payload)
                ? state.expandedPanel.filter((item) => item !== payload)
                : [...state.expandedPanel, payload];
        },
        setWordCount: (state, { payload }: PayloadAction<GeneratorState['wordCount']>) => {
            state.wordCount = payload;
        },
        setBip: (state, { payload }: PayloadAction<GeneratorState['bip']>) => {
            state.bip = payload;
            state.path = payload === 'bip32' ? '0' : initialPath;
            state.derivationPath = `${getPath(payload, state.coinType)}${state.path}`;
            state.script = Script.P2PKH;
        },
        setCoinType: (state, { payload }: PayloadAction<GeneratorState['coinType']>) => {
            state.coinType = payload;
            state.derivationPath = `${getPath(state.bip, payload)}${state.path}`;
        },
        setHardened: (state, { payload }: PayloadAction<GeneratorState['isHardened']>) => {
            state.isHardened = payload;
        },
        setScript: (state, { payload }: PayloadAction<GeneratorState['script']>) => {
            state.script = payload;
        },
        setPath: (state, { payload }: PayloadAction<GeneratorState['path']>) => {
            state.path = payload;
            state.derivationPath = `${getPath(state.bip, state.coinType)}${payload}`;
        }
    }
});

export const {
    setEntropy,
    setSeed,
    setPassphrase,
    setWordList,
    setExpandedPanel,
    setWordCount,
    setBip,
    setPath,
    setCoinType,
    setScript,
    setHardened
} = mnemonic.actions;
export default mnemonic.reducer;
