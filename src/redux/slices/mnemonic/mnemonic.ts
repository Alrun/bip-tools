import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPath } from '../../../libs/bips/bips';
import { MnemonicState } from './mnemonic.d';
import { Bips, Script } from '../../../libs/bips/bips.d';

const initialPath = "0'/0";

const initialState: MnemonicState = {
    bip: 'bip44',
    coinType: '0',
    derivationPath: `${Bips.Bip44}/0'/0'/0`,
    entropy: '',
    expandedPanel: [],
    isHardened: false,
    path: initialPath,
    passphrase: '',
    seed: '',
    script: Script.P2PKH,
    showBalances: false,
    wordList: [],
    wordCount: 12
};

export const mnemonic = createSlice({
    name: 'mnemonic',
    initialState,
    reducers: {
        setBip: (state, { payload }: PayloadAction<MnemonicState['bip']>) => {
            state.bip = payload;
            state.path = payload === 'bip32' ? '0' : initialPath;
            state.derivationPath = `${getPath(payload, state.coinType)}${state.path}`;
            state.script = Script.P2PKH;
        },
        setCoinType: (state, { payload }: PayloadAction<MnemonicState['coinType']>) => {
            state.coinType = payload;
            state.derivationPath = `${getPath(state.bip, payload)}${state.path}`;
        },
        setEntropy: (state, { payload }: PayloadAction<MnemonicState['entropy']>) => {
            state.entropy = payload;
        },
        setExpandedPanel: (state, { payload }: PayloadAction<string>) => {
            state.expandedPanel = state.expandedPanel.includes(payload)
                ? state.expandedPanel.filter((item) => item !== payload)
                : [...state.expandedPanel, payload];
        },
        setHardened: (state, { payload }: PayloadAction<MnemonicState['isHardened']>) => {
            state.isHardened = payload;
        },
        setPath: (state, { payload }: PayloadAction<MnemonicState['path']>) => {
            state.path = payload;
            state.derivationPath = `${getPath(state.bip, state.coinType)}${payload}`;
        },
        setPassphrase: (state, { payload }: PayloadAction<MnemonicState['passphrase']>) => {
            state.passphrase = payload;
        },
        setSeed: (state, { payload }: PayloadAction<MnemonicState['seed']>) => {
            state.seed = payload;
        },
        setScript: (state, { payload }: PayloadAction<MnemonicState['script']>) => {
            state.script = payload;
        },
        setShowBalances: (state, { payload }: PayloadAction<MnemonicState['showBalances']>) => {
            state.showBalances = payload;
        },
        setWordCount: (state, { payload }: PayloadAction<MnemonicState['wordCount']>) => {
            state.wordCount = payload;
        },
        setWordList: (state, { payload }: PayloadAction<MnemonicState['wordList']>) => {
            state.wordList = payload;
        }
    }
});

export const {
    setBip,
    setCoinType,
    setEntropy,
    setExpandedPanel,
    setHardened,
    setPassphrase,
    setPath,
    setSeed,
    setScript,
    setShowBalances,
    setWordCount,
    setWordList
} = mnemonic.actions;

export default mnemonic.reducer;
