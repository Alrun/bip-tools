import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import debounce from 'lodash/debounce';
import BinaryGroup from '../BinaryGroup/BinaryGroup';
import { binToHex, filterStr, getRandomHex, strToChunks } from '../../utils/crypto/crypto';
import useMnemonic from '../../hooks/useMnemonic/useMnemonic';
import enList from '../../wordlist/english';
import Select from '../../ui/Select/Select';

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

const Binary = ({ initWordCount = 12, language = 'en-us' }: any) => {
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

    const handleChangeWords = (wordValue: string | number | Array<string | number>) => {
        setWordCount(+wordValue);
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
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Select
                        options={mnemonicLanguages}
                        label="Wordlist"
                        value={lang}
                        onChange={handleChangeLang}
                        sx={{ width: 120, mr: 2 }}
                    />
                </Grid>
                <Grid item marginLeft="auto">
                    <Select
                        options={[12, 15, 18, 21, 24]}
                        label="Words"
                        value={wordCount}
                        onChange={handleChangeWords}
                        sx={{ width: 80, mr: 2 }}
                    />
                    <Button variant="contained" onClick={handleClick}>
                        Generate
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{ py: 2 }}>
                <TextField
                    id="code"
                    label="Entropy"
                    multiline
                    size="small"
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
                    }}
                />
            </Box>
            {!!binList.length && (
                <Box sx={{ pb: 2 }}>
                    <Typography
                        component="span"
                        fontSize="small"
                        // sx={{ wordBreak: 'break-word', fontFamily: 'Monospace' }}
                    >
                        Binary raw with{' '}
                    </Typography>
                    <Typography component="span" fontSize="small" sx={{ color: (theme) => theme.palette.primary.main }}>
                        checksum{' '}
                    </Typography>
                    <Typography
                        component="span"
                        fontSize="small"
                        sx={{ wordBreak: 'break-word', fontFamily: 'Monospace' }}
                    >
                        {binary}
                    </Typography>
                    <Typography
                        component="span"
                        fontSize="small"
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
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm sx={{ flexWrap: 'wrap', mx: -0.5 }}>
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
                    </Grid>
                    <Grid item xs={12} sm="auto" sx={{ textAlign: 'center' }}>
                        <Button variant="outlined" startIcon={<ContentCopyIcon />}>
                            Copy
                        </Button>
                    </Grid>
                </Grid>
            )}

            {!!binList.length && (
                <Grid container spacing={4}>
                    {binList.map((item, idx) => (
                        <Grid item key={`block-${item}`} xs={6} sm={4} md={3} lg={2}>
                            <BinaryGroup
                                id={idx}
                                value={item}
                                disabled={binList.length === idx + 1}
                                onChange={handleChangeGroup}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Binary;
