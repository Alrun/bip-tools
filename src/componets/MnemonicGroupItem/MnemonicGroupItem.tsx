import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { getIndex, getWord } from '../../libs/bip39/mnemonic/mnemonic';
import enWordList from '../../libs/bip39/wordlists/english';
import { filterStr } from '../../utils/crypto/crypto';
import Autocomplete from '../../ui/Autocomplete/Autocomplete';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import { MnemonicGroupItemProps } from './MnemonicGroupItem.d';

const MnemonicGroupItem = ({
    id,
    wordBinary,
    wordIndex,
    wordString,
    onChange,
    color,
    disabled
}: MnemonicGroupItemProps) => {
    const [binary, setBinary] = React.useState('00000000000');
    const [index, setIndex] = React.useState('0');
    const [word, setWord] = React.useState('abandon');

    const handleChangeBinary = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterStr(e.target.value, '01', 11);

        setBinary(filteredValue);
        setIndex(filteredValue ? `${getIndex(filteredValue)}` : '0');
        setWord(getWord(filteredValue || '00000000000'));
    };

    const handleOnBlurBinary = () => {
        const paddedBinary = binary.padStart(11, '0');

        setBinary(paddedBinary);
        onChange(id, paddedBinary);
    };

    const handleChangeIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterStr(e.target.value, '0123456789', 4);
        const num = +filteredValue > 2047 ? 2047 : +filteredValue;
        const paddedBinary = num.toString(2).padStart(11, '0');

        setIndex(`${num}`);
        setBinary(paddedBinary);
        setWord(getWord(paddedBinary));
    };

    const handleChangeWord = (newWord: string) => {
        if (newWord && enWordList.includes(newWord)) {
            const getWordIdx = enWordList.indexOf(newWord);
            const paddedBinary = getWordIdx.toString(2).padStart(11, '0');

            setWord(newWord);
            setBinary(paddedBinary);
            setIndex(`${getIndex(paddedBinary)}`);
            onChange(id, paddedBinary);
        }
    };

    React.useEffect(() => {
        setBinary(wordBinary);
        setIndex(wordIndex);
        setWord(wordString);
    }, [wordBinary, wordIndex, wordString]);

    return (
        <Box sx={{ py: 1 }}>
            <Typography variant="xsBold" component="div" align="center">
                {id + 1}
            </Typography>
            <Box sx={{ pb: 1 }}>
                <Input
                    id={`raw-${id}`}
                    label="Binary"
                    size="small"
                    value={binary}
                    color={color}
                    disabled={disabled}
                    inputProps={{
                        inputMode: 'text',
                        pattern: '[0-1]*',
                        sx: { fontFamily: '"Roboto Mono", monospace' },
                        autoComplete: 'new-password'
                    }}
                    onChange={handleChangeBinary}
                    onBlur={handleOnBlurBinary}
                    sx={{ width: '100%' }}
                />
            </Box>
            <Box sx={{ py: 1 }}>
                <Input
                    id={`index-${id}`}
                    label="Index"
                    size="small"
                    value={index}
                    color={color}
                    disabled={disabled}
                    type="number"
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        max: '2047',
                        min: '0',
                        sx: { fontFamily: '"Roboto Mono", monospace' },
                        autoComplete: 'new-password'
                    }}
                    onChange={handleChangeIndex}
                    onBlur={handleOnBlurBinary}
                    sx={{ width: '100%' }}
                />
            </Box>
            <Box sx={{ py: 1 }}>
                <Autocomplete
                    id={`word-${id}`}
                    options={enWordList}
                    virtualize
                    label="Word"
                    size="small"
                    value={word}
                    onChange={handleChangeWord}
                    inputProps={{ color }}
                    maxItems={5}
                    disabled={disabled}
                />
            </Box>
        </Box>
    );
};

export default MnemonicGroupItem;

export const GeneratorGroupItemSkeleton = () => (
    <Box>
        <Typography variant="xsBold" component="div" align="center">
            <Skeleton sx={{ width: 10, mb: -2, mx: 'auto' }} animation="wave" />
        </Typography>
        <Skeleton sx={{ height: 47, mb: -2 }} animation="wave" />
        <Skeleton sx={{ height: 47, mb: -2 }} animation="wave" />
        <Skeleton sx={{ height: 47, mb: -2 }} animation="wave" />
    </Box>
);
