import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Chip from '@mui/material/Chip';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import debounce from 'lodash/debounce';
import BinaryGroup from '../BinaryGroup/BinaryGroup';
import { binToHex, filterStr, getRandomHex, strToChunks } from '../../utils/crypto/crypto';
import useMnemonic from '../../hooks/useMnemonic/useMnemonic';
import { words } from '../../wordlist/english';

const Binary = ({ initWordCount = 12, language = 'en-us' }: any) => {
    const [entropy, setEntropy] = React.useState('');
    const [value, setValue] = React.useState('');
    const [binary, setBinary] = React.useState('');
    const [sum, setSum] = React.useState('');
    const [binList, setBinList] = React.useState<string[]>([]);
    const [list, bin, checksum] = useMnemonic(entropy);
    const [wordCount, setWordCount] = React.useState(initWordCount);
    const [lang, setLang] = React.useState(language);

    const checkLength = React.useCallback((val) => ![12, 15, 18, 21, 24].includes((val.length / 8) * 3), []);

    const delayedHandleChange = React.useCallback(
        debounce((eventData) => setEntropy(eventData), 500),
        []
    );

    const handleChangeGroup = (idx: number, val: string) => {
        const binaryArr = strToChunks(binary, 11) || [];

        // console.log(idx, val);

        binaryArr[idx] = val;

        const hex = binToHex(binaryArr.join(''));

        setValue(hex);
        setEntropy(hex);
    };

    const handleChangeWords = (e: SelectChangeEvent) => {
        setWordCount(+e.target.value);
    };

    const handleChangeLang = (e: SelectChangeEvent) => {
        setLang(e.target.value);
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
        <Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <FormControl sx={{ width: 120, mr: 2 }}>
                        <InputLabel id="demo-simple-select-label">Wordlist</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            label="Wordlist"
                            onChange={handleChangeLang}
                            native
                            size="small"
                        >
                            <option value="en-us">English</option>
                            <option value="es-us">Español</option>
                            <option value="fr-us">Français</option>
                            <option value="pr-us">Português</option>
                            <option value="ce-us">Čeština</option>
                            <option value="it-us">Italiano</option>
                            <option value="jp-us">日本語</option>
                            <option value="ch-us">中文(简体)</option>
                            <option value="ch-us">中文(繁體)</option>
                            <option value="kr-us">한국어</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item marginLeft="auto">
                    <FormControl sx={{ width: 80, mr: 2 }}>
                        <InputLabel id="demo-simple-select-label">Words</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={wordCount}
                            label="Words"
                            onChange={handleChangeWords}
                            native
                            size="small"
                        >
                            <option value={12}>12</option>
                            <option value={15}>15</option>
                            <option value={18}>18</option>
                            <option value={21}>21</option>
                            <option value={24}>24</option>
                        </Select>
                    </FormControl>
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
                                        {words[parseInt(item, 2)]}
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
        </Box>
    );
};

export default Binary;
