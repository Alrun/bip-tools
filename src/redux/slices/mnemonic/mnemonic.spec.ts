import mnemonicReducer, {
    setBip,
    setCoinType,
    setEntropy,
    setExpandedPanel,
    setHardened,
    setPath,
    setPassphrase,
    setSeed,
    setScript,
    setShowBalances,
    setWordCount,
    setWordList
} from './mnemonic';
import { MnemonicState } from './mnemonic.d';
import { Script } from '../../../libs/bips/bips.d';

describe('mnemonic reducer', () => {
    const initialState: MnemonicState = {
        bip: 'bip44',
        coinType: '0',
        derivationPath: "m/44'/0'/0'/0",
        entropy: '',
        expandedPanel: [],
        isHardened: false,
        passphrase: '',
        path: "0'/0",
        seed: '',
        script: Script.P2PKH,
        showBalances: false,
        wordCount: 12,
        wordList: []
    };

    it('should return the initial state', () => {
        expect(mnemonicReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    describe('setBip', () => {
        it('should handle change bip', () => {
            expect(mnemonicReducer(initialState, setBip('bip84'))).toEqual({
                ...initialState,
                ...{
                    bip: 'bip84',
                    derivationPath: "m/84'/0'/0'/0"
                }
            });
        });

        it('should handle change to BIP32', () => {
            expect(mnemonicReducer(initialState, setBip('bip32'))).toEqual({
                ...initialState,
                ...{
                    bip: 'bip32',
                    derivationPath: 'm/0',
                    path: '0'
                }
            });
        });
    });

    it('should handle change coin type', () => {
        const actual = mnemonicReducer(initialState, setCoinType('60'));

        expect(actual.coinType).toBe('60');
    });

    it('should handle change entropy', () => {
        const actual = mnemonicReducer(initialState, setEntropy('1234'));

        expect(actual.entropy).toBe('1234');
    });

    describe('expandedPanel', () => {
        it('should handle the panel ID being added to an empty list', () => {
            expect(mnemonicReducer(initialState, setExpandedPanel('panel-1')).expandedPanel).toEqual(['panel-1']);
        });

        it('should handle removing the panel ID if it is contained in the list', () => {
            expect(
                mnemonicReducer(
                    {
                        ...initialState,
                        ...{
                            expandedPanel: ['panel-1']
                        }
                    },
                    setExpandedPanel('panel-1')
                ).expandedPanel
            ).toEqual([]);
        });
    });

    it('should handle change hardened keys', () => {
        const actual = mnemonicReducer(initialState, setHardened(true));

        expect(actual.isHardened).toBe(true);
    });

    it('should handle change passphrase', () => {
        const actual = mnemonicReducer(initialState, setPassphrase('pass'));

        expect(actual.passphrase).toBe('pass');
    });

    it('should handle change path', () => {
        const actual = mnemonicReducer(initialState, setPath("0'"));

        expect(actual.path).toBe("0'");
    });

    it('should handle change seed', () => {
        const actual = mnemonicReducer(initialState, setSeed('1234'));

        expect(actual.seed).toBe('1234');
    });

    it('should handle change script', () => {
        const actual = mnemonicReducer(initialState, setScript(Script.P2WPKHP2SH));

        expect(actual.script).toBe(Script.P2WPKHP2SH);
    });

    it('should handle change show balances', () => {
        const actual = mnemonicReducer(initialState, setShowBalances(true));

        expect(actual.showBalances).toBe(true);
    });

    it('should handle change word count', () => {
        const actual = mnemonicReducer(initialState, setWordCount(18));

        expect(actual.wordCount).toBe(18);
    });

    it('should handle word data being added to an empty list', () => {
        const wordList = [
            {
                id: 1,
                wordBinary: '000000001',
                wordIndex: '1',
                wordString: 'abandon'
            }
        ];
        const actual = mnemonicReducer(initialState, setWordList(wordList));

        expect(actual.wordList).toBe(wordList);
    });
});
