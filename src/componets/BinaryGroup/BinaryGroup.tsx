import React from 'react';
import debounce from 'lodash/debounce';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import enList from '../../wordlist/english';
import { filterStr } from '../../utils/crypto/crypto';
import Virtualize from '../../ui/Autocomplete/Autocomplete';

const BinaryGroup = ({ id, value, color, disabled, onChange }: any) => {
    const [binary, setBinary] = React.useState<string>(value);
    const [index, setIndex] = React.useState<number>(parseInt(value, 2) + 1);
    const [word, setWord] = React.useState<string>(enList[index - 1]);

    const delayedHandleChange = React.useCallback(
        debounce(([idx, val]) => onChange(idx, val), 500),
        []
    );

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const strToArr = event.target.value.trim().split('');
    // const filteredValue = strToArr.filter((item) => item === '0' || item === '1')
    // var digit = parseInt(binary, 2);
    // setBinary(filteredValue.join(''));
    // setBinary(e.target.value);
    // setIndex(`${parseInt(event.target.value, 2)}`);
    // setWord(words[parseInt(e.target.value, 2) + 1]);
    // };

    const handleChangeBinary = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterStr(e.target.value, '01', 11);

        setBinary(filteredValue);
    };

    const handleOnBlurBinary = () => delayedHandleChange([id, binary.padStart(11, '0')]);

    const handleChangeIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterStr(e.target.value, '0123456789', 4);
        const num = +filteredValue > 2047 ? 2048 : +filteredValue;

        setIndex(num);
        delayedHandleChange([id, num.toString(2).padStart(11, '0')]);
    };

    const handleChangeWord = (newWord: string) => {
        if (newWord && enList.includes(newWord)) {
            const getWordIdx = enList.indexOf(newWord);
            const binStr = getWordIdx.toString(2).padStart(11, '0');

            setWord(newWord);
            onChange(id, binStr);
        }
    };

    return (
        <Box>
            <Box sx={{ py: 1 }}>
                <Typography align="center">{id + 1}</Typography>
                <Box sx={{ py: 1 }}>
                    <TextField
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
                    <TextField
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
                            max: '2048',
                            min: '1',
                            sx: { fontFamily: 'Monospace' },
                            autoComplete: 'new-password'
                        }}
                        onChange={handleChangeIndex}
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Box sx={{ py: 1 }}>
                    <Virtualize
                        // id={`word-${id}`}
                        options={enList as any}
                        label="Word"
                        value={word}
                        onChange={handleChangeWord}
                        // color={color}
                        maxItems={5}
                        disabled={disabled}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default BinaryGroup;
