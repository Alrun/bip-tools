import React from 'react';
import Typography from '../../ui/Typography/Typography';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Chip from '@mui/material/Chip';
import Input from '../../ui/Input/Input';
import Grid from '@mui/material/Grid';
import Button from '../../ui/Button/Button';
import debounce from 'lodash/debounce';
import GeneratorGroup from '../GeneratorGroup/GeneratorGroup';
import { binToHex, filterStr, getRandomHex, strToChunks } from '../../utils/crypto/crypto';
import useMnemonic from '../../hooks/useMnemonic/useMnemonic';
import enList from '../../wordlist/english';
import Select from '../../ui/Select/Select';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Theme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Derivation from '../Derivation/Derivation';

const mnemonicLanguages = [
    { label: 'English', value: 'en-us' },
    { label: 'Français', value: 'fr-fr' },
    { label: 'Português', value: 'pt-pt' },
    { label: 'Čeština', value: 'cs-cz' },
    { label: 'Italiano', value: 'it-it' },
    { label: '日本語', value: 'ja-jp' },
    { label: '中文(简体)', value: 'zh-cn' },
    { label: '中文(繁體)', value: 'zh-tw' },
    { label: '한국어', value: 'ko-kr' }
];

const TabGenerator = ({ initWordCount = 12, language = 'en-us' }: any) => {
    const [entropy, setEntropy] = React.useState('');
    const [value, setValue] = React.useState('');
    const [binary, setBinary] = React.useState('');
    const [sum, setSum] = React.useState('');
    const [binList, setBinList] = React.useState<string[]>([]);
    const [list, bin, checksum] = useMnemonic(entropy);
    const [wordCount, setWordCount] = React.useState<number>(initWordCount);
    const [lang, setLang] = React.useState(language);
    // TODO: Remove useCallback
    const checkLength = React.useCallback((val) => ![12, 15, 18, 21, 24].includes((val.length / 8) * 3), []);
    // TODO: Remove useCallback
    const delayedHandleChange = React.useCallback(
        debounce((eventData) => setEntropy(eventData), 500),
        []
    );
    // TODO: Add useCallback
    const handleChangeGroup = (idx: number, val: string) => {
        const binaryArr = strToChunks(binary, 11) || [];

        // console.log(idx, val);

        binaryArr[idx] = val;

        const hex = binToHex(binaryArr.join(''));

        setValue(hex);
        setEntropy(hex);
    };

    const handleChangeWords = (e: any) => {
        setWordCount(+e.target.value);
    };

    const handleChangeLang = (langValue: string | number | Array<string | number>) => {
        setLang(langValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const letters = '0123456789abcdef';
        const filteredValue = filterStr(e.target.value, letters, 64);

        setValue(filteredValue);
        delayedHandleChange(filteredValue);
    };

    const handleClick = () => {
        const randomHex = getRandomHex((wordCount / 3) * 8);

        setEntropy(randomHex);
        setValue(randomHex);
    };

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleExpand = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    React.useEffect(() => {
        const randomHex = getRandomHex((wordCount / 3) * 8);

        setValue(randomHex);
        setEntropy(randomHex);
    }, []);

    React.useEffect(() => {
        setBinary(bin);
        setSum(checksum);
        setBinList(list);
    }, [checksum]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <Select
                        options={mnemonicLanguages}
                        label="Wordlist"
                        value={lang}
                        onChange={handleChangeLang}
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
                        onChange={handleChangeWords}
                    >
                        <ToggleButton sx={{ px: 3 }} value={12}>
                            12
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value={15}>
                            15
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value={18}>
                            18
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value={21}>
                            21
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value={24}>
                            24
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Button onClick={handleClick}>Generate</Button>
                </Grid>
            </Grid>

            <Box sx={{ pt: 4, pb: 6 }}>
                <Input
                    label="Entropy"
                    multiline
                    value={value}
                    error={!!value && checkLength(value)}
                    helperText={
                        !!value && checkLength(value) && 'The number of characters must be equal 32, 40, 48, 56, 64'
                    }
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    InputProps={{
                        spellCheck: false,
                        sx: { fontFamily: 'Monospace' }
                        // shrink: true
                    }}
                />
            </Box>
            {!!binList.length && (
                <Box sx={{ pb: 4 }}>
                    <Input
                        label="Binary raw"
                        multiline
                        value={binary}
                        // variant="filled"
                        variant="standard"
                        // error={!!value && checkLength(value)}
                        // helperText={
                        //     !!value && checkLength(value) && 'The number of characters must be equal 32, 40, 48, 56, 64'
                        // }
                        // onChange={handleChange}
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
                        {sum}
                    </Typography>
                </Box>
            )}

            {!!binList.length && (
                <Paper variant='outlined' sx={{p: 2, mb: 4}}>
                    {binList.map((item, idx) => (
                        <Chip
                            variant="outlined"
                            label={
                                <Typography>
                                    <Box
                                        component="span"
                                        sx={{
                                            color: (theme) => theme.palette.grey[500],
                                            userSelect: 'none'
                                        }}
                                    >
                                        {idx + 1}
                                    </Box>{' '}
                                    {enList[parseInt(item, 2)]}
                                </Typography>
                            }
                            key={`word-${item}`}
                            sx={{ m: 0.5 }}
                        />
                    ))}

                    <Chip
                        // variant="outlined"
                        icon={<ContentCopyIcon fontSize="inherit"/>}
                        label="Copy"
                        color="primary"
                        sx={{ m: 0.5, px: 2.5, fontSize: 'inherit' }}
                        onClick={() => {}}
                    />
                </Paper>
            )}

            <Box sx={{ mb: 4 }}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    elevation={0}
                    variant="outlined"
                    // sx={{ border: (theme: Theme) => `1px solid ${theme.palette.divider}` }}
                    onChange={handleExpand('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>Extended</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {!!binList.length && (
                            <Grid container spacing={4}>
                                {binList.map((item, idx) => (
                                    <Grid item key={`block-${item}`} xs={6} sm={4} md={3} lg={2}>
                                        <GeneratorGroup
                                            id={idx}
                                            value={item}
                                            disabled={binList.length === idx + 1}
                                            onChange={handleChangeGroup}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </AccordionDetails>
                </Accordion>
            </Box>

        </>
    );
};

export default TabGenerator;
