import React from 'react';
import Box from '@mui/material/Box';
import { binToHex, hexToBin, strToChunks } from '../../utils/crypto/crypto';
import { setEntropy, setExpandedPanel, setWordCount, setWordList } from '../../redux/slices/mnemonic/mnemonic';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getIndex, getWord, wordCountList } from '../../libs/bip39/mnemonic/mnemonic';
import useMnemonic from '../../hooks/useMnemonic/useMnemonic';
import MnemonicEditableContent from '../MnemonicEditableContent/MnemonicEditableContent';
import MnemonicGroup from '../MnemonicGroup/MnemonicGroup';
import MnemonicGenerator from '../MnemonicGenerator/MnemonicGenerator';

const TabMnemonic = () => {
    const { entropy, wordList, expandedPanel, wordCount } = useAppSelector((state) => state.mnemonic);
    const dispatch = useAppDispatch();

    const { list, checksum } = useMnemonic(entropy);

    const currentWords = React.useMemo(() => list.map((item) => getWord(item)), [list]);

    const handleChangeEntropy = React.useCallback((hex: string) => dispatch(setEntropy(hex)), []);
    const handleExpandPanel = React.useCallback((panel: string) => () => dispatch(setExpandedPanel(panel)), []);
    const handleChangePhrase = React.useCallback((binStr: string) => handleChangeEntropy(binStr), []);

    const handleChangeWordCount = React.useCallback(
        (count: typeof wordCountList[number]) => dispatch(setWordCount(count)),
        []
    );

    const handleChangeGroup = React.useCallback(
        (idx: number, val: string) => {
            const entropyBin = hexToBin(entropy);
            const binaryArr = strToChunks(entropyBin, 11) || [];
            const editedBinaryArr = binaryArr.reduce<string[]>(
                (acc, cur, curIdx) => (curIdx === idx ? acc.concat(val) : acc.concat(cur)),
                []
            );
            const editedEntropy = binToHex(editedBinaryArr.join(''));

            handleChangeEntropy(editedEntropy);
        },
        [entropy]
    );

    React.useEffect(() => {
        if (list.length) {
            const formattedList = list.map((item, idx) => ({
                id: idx,
                wordBinary: item,
                wordIndex: `${getIndex(item)}`,
                wordString: getWord(item)
            }));

            dispatch(setWordList(formattedList));
        }
    }, [list]);

    return (
        <>
            <Box sx={{ mb: 4 }}>
                <MnemonicGenerator
                    entropy={entropy}
                    checksum={checksum}
                    wordCount={wordCount}
                    onChangeEntropy={handleChangeEntropy}
                    onChangeWordCount={handleChangeWordCount}
                />
            </Box>
            <Box sx={{ mb: 4 }}>
                <MnemonicEditableContent words={currentWords} onChange={handleChangePhrase} />
            </Box>
            <Box sx={{ mb: 4 }}>
                <MnemonicGroup
                    list={list}
                    entropy={entropy}
                    wordList={wordList}
                    expandedPanel={expandedPanel}
                    onExpandPanel={handleExpandPanel}
                    onChangeGroup={handleChangeGroup}
                />
            </Box>
        </>
    );
};

export default TabMnemonic;
