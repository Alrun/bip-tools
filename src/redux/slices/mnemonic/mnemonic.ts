import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const wordlistLangArr = [
    { label: 'English', value: 'en-us' },
    { label: 'Français', value: 'fr-fr' },
    { label: 'Português', value: 'pt-pt' },
    { label: 'Čeština', value: 'cs-cz' },
    { label: 'Italiano', value: 'it-it' },
    { label: '日本語', value: 'ja-jp' },
    { label: '中文(简体)', value: 'zh-cn' },
    { label: '中文(繁體)', value: 'zh-tw' },
    { label: '한국어', value: 'ko-kr' }
] as const;

export const wordCountList = [12, 15, 18, 21, 24] as const;

export interface GeneratorState {
    entropy: string;
    seed: string;
    expandedPanel: string[];
    wordCount: typeof wordCountList[number];
    wordlistLang: typeof wordlistLangArr[number]['value'];
}

const initialState: GeneratorState = {
    entropy: '',
    seed: '',
    expandedPanel: [],
    wordCount: 12,
    wordlistLang: 'en-us'
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
        setExpandedPanel: (state, { payload }: PayloadAction<string>) => {
            state.expandedPanel = state.expandedPanel.includes(payload)
                ? state.expandedPanel.filter((item) => item !== payload)
                : [...state.expandedPanel, payload];
        },
        setWordCount: (state, { payload }: PayloadAction<GeneratorState['wordCount']>) => {
            state.wordCount = payload;
        },
        setWordlistLang: (state, { payload }: PayloadAction<GeneratorState['wordlistLang']>) => {
            state.wordlistLang = payload;
        }
    }
});

export const { setEntropy, setSeed, setExpandedPanel, setWordCount, setWordlistLang } = mnemonic.actions;
export default mnemonic.reducer;
