import React from 'react';
import debounce from 'lodash/debounce';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Chip from '@mui/material/Chip';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import Paper from '@mui/material/Paper';
import { binToHex, filterStr, getRandomHex, hexToBin, strToChunks } from '../../utils/crypto/crypto';
import {
    GeneratorState,
    setEntropy,
    setExpandedPanel,
    setWordCount,
    setWordlistLang,
    wordCountList,
    wordlistLangArr
} from '../../redux/slices/mnemonic/mnemonic';
import useMnemonic from '../../hooks/useMnemonic/useMnemonic';
import enList from '../../wordlists/english';
import Select from '../../ui/Select/Select';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import GeneratorGroup from '../GeneratorGroup/GeneratorGroup';
import GeneratorEditableContent from '../GeneratorEditableContent/GeneratorEditableContent';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getWord } from '../../utils/mnemonic/mnemonic';
import { isValidLength } from '../../utils/validate/validate';

const TabGenerator = () => {
    const { entropy, expandedPanel, wordlistLang, wordCount } = useAppSelector((state) => state.mnemonic);
    const dispatch = useAppDispatch();
    // TODO: Remove after render check
    const rendersCount = React.useRef(0);

    const [entropyValue, setEntropyValue] = React.useState(entropy);
    const [binaryValue, setBinaryValue] = React.useState(() => hexToBin(entropy));
    const { list, checksum, loading } = useMnemonic(entropy);
    const formattedList = React.useMemo(() => list.map((item, id) => ({ id, item })), [list]);
    const words = React.useMemo(() => list.map((item) => getWord(enList, item)), [list, enList]);

    const handleChangeWordlistLang = (lang: GeneratorState['wordlistLang']) => dispatch(setWordlistLang(lang));
    const handleExpandPanel = (panel: string) => () => dispatch(setExpandedPanel(panel));
    const handleChangeEntropy = (hex: string) => dispatch(setEntropy(hex));

    const delayedEntropyChangeHandle = React.useCallback(
        debounce((eventData) => handleChangeEntropy(eventData), 300),
        []
    );

    const handleChangeEntropyValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const letters = '0123456789abcdef';
        const filteredValue = filterStr(e.target.value, letters, 64);

        setEntropyValue(filteredValue);
        setBinaryValue(hexToBin(filteredValue));
        delayedEntropyChangeHandle(filteredValue);
    };

    const handleChangeBinaryValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const letters = '01';
        const filteredValue = filterStr(e.target.value, letters, 256);
        const hexValue = binToHex(filteredValue);

        setBinaryValue(filteredValue);
        setEntropyValue(hexValue);
        delayedEntropyChangeHandle(hexValue);
    };

    const handleChangeWordCount = (event: React.MouseEvent<HTMLElement>, count: GeneratorState['wordCount']) =>
        dispatch(setWordCount(count));

    const handleGenerateEntropy = () => {
        const randomHex = getRandomHex((wordCount / 3) * 8);

        setEntropyValue(randomHex);
        setBinaryValue(hexToBin(randomHex));
        delayedEntropyChangeHandle(randomHex);
    };

    const handleChangePhrase = (binStr: string) => {
        setEntropyValue(binStr);
        setBinaryValue(hexToBin(binStr));
        delayedEntropyChangeHandle(binStr);
        console.log('Tab generator change phrase ', binStr);
    };

    const handleChangeGroup = React.useCallback(
        (idx: number, val: string) => {
            const binaryArr = strToChunks(binaryValue, 11) || [];
            const editedBinaryArr = binaryArr.reduce<string[]>(
                (acc, cur, curIdx) => (curIdx === idx ? acc.concat(val) : acc.concat(cur)),
                []
            );
            const editedEntropy = binToHex(editedBinaryArr.join(''));

            setEntropyValue(editedEntropy);
            setBinaryValue(hexToBin(editedEntropy));
            delayedEntropyChangeHandle(editedEntropy);
        },
        [binaryValue]
    );

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <Select
                        options={wordlistLangArr}
                        label="Wordlist"
                        value={wordlistLang}
                        onChange={handleChangeWordlistLang}
                        sx={{ width: 120, mr: 2 }}
                    />
                </Grid>
                <Grid item sx={{ display: 'flex' }} marginLeft="auto" alignItems="center">
                    <Typography sx={{ mr: 4 }}>Words</Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={wordCount}
                        exclusive
                        size="small"
                        sx={{ mr: 6 }}
                        onChange={handleChangeWordCount}
                    >
                        {wordCountList.map((num) => (
                            <ToggleButton key={num} sx={{ px: 3 }} value={num}>
                                {num}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                    <Button async onClick={handleGenerateEntropy} loading={loading}>
                        Generate
                    </Button>
                </Grid>
            </Grid>

            <div>
                <Box sx={{ pt: 4, pb: 6 }}>
                    <Input
                        label="Entropy"
                        multiline
                        value={entropyValue}
                        error={!!entropyValue && !isValidLength(entropyValue)}
                        helperText={
                            !!entropyValue &&
                            !isValidLength(entropyValue) &&
                            `The number of characters must be equal 32, 40, 48, 56, 64 (current ${entropyValue.length})`
                        }
                        onChange={handleChangeEntropyValue}
                        sx={{ width: '100%' }}
                        InputProps={{
                            spellCheck: false,
                            sx: { fontFamily: 'Monospace' }
                            // shrink: true
                        }}
                    />
                </Box>
                <Box sx={{ mb: 4 }}>
                    <Input
                        label="Binary raw"
                        multiline
                        value={binaryValue}
                        // variant="filled"
                        variant="standard"
                        // error={!!value && isValidLength(value)}
                        // helperText={
                        //     !!value && isValidLength(value) && 'The number of characters must be equal 32, 40, 48, 56, 64'
                        // }
                        onChange={handleChangeBinaryValue}
                        iconPosition="end"
                        sx={{ width: '100%' }}
                        InputProps={{
                            sx: { fontFamily: 'Monospace' },
                            spellCheck: false
                            // endAdornment: (
                            //     <InputAdornment
                            //         position="end"
                            //         sx={{
                            //             color: (theme) => theme.palette.info.main,
                            //             fontFamily: 'Monospace'
                            //         }}
                            //     >
                            //         {sum}
                            //     </InputAdornment>
                            // )
                        }}
                    />
                    {!!entropyValue && (
                        <Box>
                            <Typography
                                component="span"
                                variant="smRegular"
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            >
                                Checksum{' '}
                            </Typography>
                            <Typography
                                component="span"
                                variant="smRegular"
                                sx={{
                                    wordBreak: 'break-word',
                                    fontFamily: 'Monospace',
                                    color: (theme) => theme.palette.primary.main
                                }}
                            >
                                {checksum}
                            </Typography>
                        </Box>
                    )}
                </Box>
                <Box
                    sx={{
                        transition: (theme) =>
                            `${theme.transitions.create('opacity', {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.enteringScreen
                            })}`,
                        opacity: loading ? 0.5 : 1
                        // pointerEvents: loading ? 'none' : 'auto'
                    }}
                >
                    <Box sx={{ mb: 4 }}>
                        {/* {!!(entropyValue && list.length) && <GeneratorTextarea />} */}
                        <GeneratorEditableContent words={words} wordList={enList} onChange={handleChangePhrase} />
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Accordion
                            expanded={expandedPanel.includes('generator-panel-1')}
                            TransitionProps={{ unmountOnExit: true }}
                            elevation={0}
                            variant="outlined"
                            // sx={{ border: (theme: Theme) => `1px solid ${theme.palette.divider}` }}
                            onChange={handleExpandPanel('generator-panel-1')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>Extended</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {!(entropyValue && list.length) ? (
                                    <Box>Press generate button or enter your code.</Box>
                                ) : (
                                    <GeneratorGroup
                                        list={formattedList}
                                        wordList={enList}
                                        onChange={handleChangeGroup}
                                    />
                                )}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <b>
                    {/* eslint-disable-next-line no-plusplus */}
                    Tab Generator RENDER COUNT: {++rendersCount.current}
                </b>
            </div>
        </>
    );
};

export default TabGenerator;

// const handleChangeEntropy = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const letters = '0123456789abcdef';
//     const filteredValue = filterStr(e.target.value, letters, 64);
//
//     setEntropyValue(filteredValue);
//     // debounce((eventData) => console.log('debounce'), 1500);
//     // debounce(() => (changeEntropy(filteredValue)), 500)
//     delayedEntropyChangeHandle(filteredValue);
// };

// const binListToStrList = (bList: any) => {
//     const res = bList.map((item: any) => {
//         const index = parseInt(item, 2) + 1;
//
//         return enList[index - 1];
//     });
//
//     return res.join(' ');
// };

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// const strToArr = event.target.value.trim().split('');
// const filteredValue = strToArr.filter((item) => item === '0' || item === '1')
// var digit = parseInt(binary, 2);
// setBinary(filteredValue.join(''));
// setBinary(e.target.value);
// setIndex(`${parseInt(event.target.value, 2)}`);
// setWord(words[parseInt(e.target.value, 2) + 1]);
// };
