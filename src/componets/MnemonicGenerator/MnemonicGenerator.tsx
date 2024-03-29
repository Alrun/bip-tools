import React from 'react';
import debounce from 'lodash/debounce';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { binToHex, filterStr, getRandomHex, hexToBin } from '../../utils/crypto/crypto';
import { wordCountList } from '../../libs/bip39/mnemonic/mnemonic';
import { isEntropyValidLength } from '../../libs/bip39/validate/validate';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import ToggleButtons from '../../ui/ToggleButtons/ToggleButtons';
import { MnemonicGeneratorProps } from './MnemonicGenerator.d';

const wordCountOptions = wordCountList.map((num) => ({ value: num, children: num }));

const MnemonicGenerator = ({
    entropy,
    checksum,
    wordCount,
    onChangeWordCount,
    onChangeEntropy
}: MnemonicGeneratorProps) => {
    const [entropyValue, setEntropyValue] = React.useState(() => entropy);
    const [binaryValue, setBinaryValue] = React.useState(() => hexToBin(entropy));

    const delayedEntropyChangeHandle = React.useCallback(
        debounce((hex: string) => onChangeEntropy(hex), 300),
        []
    );

    const handleChangeEntropyValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const chars = '0123456789abcdef';
        const filteredValue = filterStr(e.target.value, chars, 64);

        setEntropyValue(filteredValue);
        setBinaryValue(hexToBin(filteredValue));
        delayedEntropyChangeHandle(filteredValue);
    };

    const handleChangeBinaryValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const chars = '01';
        const filteredValue = filterStr(e.target.value, chars, 256);
        const hexValue = binToHex(filteredValue);

        setBinaryValue(filteredValue);
        setEntropyValue(hexValue);
        delayedEntropyChangeHandle(hexValue);
    };

    const handleChangeWordCount = (count: typeof wordCountList[number] | null) => {
        if (count) onChangeWordCount(count);
    };

    const handleGenerateEntropy = () => {
        const randomHex = getRandomHex((wordCount / 3) * 8);

        setEntropyValue(randomHex);
        setBinaryValue(hexToBin(randomHex));
        delayedEntropyChangeHandle(randomHex);
    };

    React.useEffect(() => {
        setEntropyValue(entropy);
        setBinaryValue(hexToBin(entropy));
    }, [entropy]);

    return (
        <>
            <Grid container spacing={{ xs: 2, xl: 8 }} mb={{ xs: 4, sm: 2 }} alignItems="flex-end">
                <Grid item xs={12} sm xl="auto" sx={{ order: { xl: 1 }, mb: { xs: 6, sm: 2 } }}>
                    <Button
                        sx={{ textTransform: 'uppercase', width: { xs: '100%', sm: 'auto' } }}
                        onClick={handleGenerateEntropy}
                    >
                        Generate
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm="auto"
                    sx={{
                        display: { sm: 'flex' },
                        order: { xs: -1, sm: 0 },
                        textAlign: 'center',
                        mb: { xs: 6, sm: 2 }
                    }}
                    marginLeft="auto"
                    alignItems="center"
                >
                    <Typography sx={{ mr: 4 }}>Words</Typography>
                    <ToggleButtons
                        options={wordCountOptions}
                        selected={wordCount}
                        onChange={handleChangeWordCount}
                        ButtonsProps={{
                            sx: { fontSize: (theme) => theme.typography.smRegular.fontSize, px: 3 }
                        }}
                    />
                </Grid>
                <Grid item xs={12} xl sx={{ order: { xl: -1 }, mb: { xs: 6, sm: 2 } }}>
                    <Input
                        label="Entropy"
                        multiline
                        value={entropyValue}
                        error={!!entropyValue && !isEntropyValidLength(entropyValue)}
                        helperText={
                            !!entropyValue &&
                            !isEntropyValidLength(entropyValue) &&
                            `The number of characters must be equal 32, 40, 48, 56, 64 (current ${entropyValue.length})`
                        }
                        onChange={handleChangeEntropyValue}
                        sx={{ width: '100%' }}
                        InputProps={{
                            spellCheck: false,
                            sx: { fontFamily: '"Roboto Mono", monospace' }
                        }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mb: 4 }}>
                <Input
                    label="Binary raw"
                    multiline
                    value={binaryValue}
                    variant="standard"
                    onChange={handleChangeBinaryValue}
                    iconPosition="end"
                    sx={{ width: '100%' }}
                    InputProps={{
                        sx: { fontFamily: '"Roboto Mono", monospace' },
                        spellCheck: false
                    }}
                />
                {!!entropyValue && checksum && (
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
                                fontFamily: '"Roboto Mono", monospace',
                                color: (theme) => theme.palette.primary.main
                            }}
                        >
                            {checksum}
                        </Typography>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default React.memo(MnemonicGenerator);
