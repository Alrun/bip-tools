import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { filterStr } from '../../utils/crypto/crypto';
import Autocomplete from '../../ui/Autocomplete/Autocomplete';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import { GeneratorGroupItemProps } from './GeneratorGroupItem.d';
import { getIndex, getWord } from '../../utils/mnemonic/mnemonic';

const GeneratorGroupItem = ({ id, value, wordList, onChange, color, disabled }: GeneratorGroupItemProps) => {
    const [binary, setBinary] = React.useState(value);
    const [index, setIndex] = React.useState(() => getIndex(value));
    const [word, setWord] = React.useState(() => getWord(wordList, value));

    const handleChangeBinary = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterStr(e.target.value, '01', 11);

        setBinary(filteredValue);
        setIndex(filteredValue ? getIndex(filteredValue) : 0);
        setWord(getWord(wordList, filteredValue || '00000000000'));
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

        setIndex(num);
        setBinary(paddedBinary);
        setWord(getWord(wordList, paddedBinary));
    };

    const handleChangeWord = (newWord: string) => {
        if (newWord && wordList.includes(newWord)) {
            const getWordIdx = wordList.indexOf(newWord);
            const paddedBinary = getWordIdx.toString(2).padStart(11, '0');

            setWord(newWord);
            setBinary(paddedBinary);
            setIndex(getIndex(paddedBinary));
            onChange(id, paddedBinary);
        }
    };

    React.useEffect(() => {
        setBinary(value);
        setIndex(getIndex(value));
        setWord(getWord(wordList, value));
    }, [value]);

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
                        sx: { fontFamily: 'Monospace' },
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
                        sx: { fontFamily: 'Monospace' },
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
                    options={wordList}
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

export default GeneratorGroupItem;
