import React from 'react';
import { Theme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import Switch from '../../ui/Switch/Switch';
import coinTypeList from '../../libs/bip44/coinTypeList';
import { BipType, Script } from '../../libs/bips/bips.d';
import { filterStr } from '../../utils/crypto/crypto';
import { getPath } from '../../libs/bips/bips';
import ToggleButtons from '../../ui/ToggleButtons/ToggleButtons';

const coinOptions = coinTypeList.map(({ coin, type }) => ({ label: coin, value: type }));

const bipOptions = [
    { value: 'bip32', children: 'BIP32' },
    { value: 'bip44', children: 'BIP44' },
    { value: 'bip49', children: 'BIP49' },
    { value: 'bip84', children: 'BIP84' }
];

const hardenedOptions = [
    { value: 'normal', children: 'Normal' },
    { value: 'hardened', children: 'Hardened' }
];

const scriptOptions = [
    { value: Script.P2PKH, children: Script.P2PKH },
    { value: Script.P2WPKHP2SH, children: Script.P2WPKHP2SH },
    { value: Script.P2WPKH, children: Script.P2WPKH }
];

const AddressDerivation = ({
    bip,
    onChangeBip,
    expandedPanel,
    onExpandPanel,
    pathDerivation,
    onChangePathDerivation,
    script,
    onChangeScript,
    isHardened,
    onChangeHardened,
    coinType,
    onChangeCoin,
    extendedDerivedPrivateKey = '',
    extendedDerivedPublicKey = ''
}: any) => {
    const [master, setMaster] = React.useState(() => getPath(bip, coinType));
    const [path, setPath] = React.useState(() => pathDerivation);
    const [bipValue, setBipValue] = React.useState<BipType>(bip);
    // const [scriptValue, setScriptValue] = React.useState(script);

    const handleChangeBip = (val: BipType | null) => {
        if (val) {
            setBipValue(val);
            setMaster(getPath(val, coinType));
            onChangeBip(val);
        }
    };

    const handleChangeCoin = (val: string) => {
        setMaster(getPath(bip, val));
        onChangeCoin(val);
    };

    const handleChangeHardened = (val: 'normal' | 'hardened' | null) => {
        if (val === 'normal') onChangeHardened(false);
        if (val === 'hardened') onChangeHardened(true);
    };

    const handleChangeScript = (val: `${Script}` | null) => {
        if (val) {
            // setScriptValue(val);
            onChangeScript(val);
        }
    };

    const handleChangePath = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const chars = "0123456789hH'/";
        const filteredValue = filterStr(e.target.value, chars)
            .replace(/[h']+/g, "'")
            .replace(/\/+/g, '/')
            .replace(/^[/']/g, '');

        setPath(filteredValue);
        onChangePathDerivation(filteredValue);
    };

    React.useEffect(() => {
        setPath(pathDerivation);
    }, [pathDerivation]);

    // TODO: Remove after render check
    const rendersCount = React.useRef(0);

    return (
        <>
            <Grid
                container
                spacing={{ xs: 8, xl: 4 }}
                sx={{ mb: 6 }}
                alignItems="flex-end"
                justifyContent={{ xs: 'space-between' }}
            >
                <Grid item xs={12} sm order={{ xs: 0 }}>
                    <ToggleButtons
                        options={bipOptions}
                        selected={bipValue}
                        onChange={handleChangeBip}
                        sx={{ pt: 2 }}
                        ButtonsProps={{
                            sx: { fontSize: (theme) => theme.typography.smRegular.fontSize, px: 3 }
                        }}
                    />
                </Grid>
                {bip === 'bip32' && (
                    <Grid item xs={12} sm order={{ xs: 1 }}>
                        <ToggleButtons
                            options={scriptOptions}
                            selected={script}
                            onChange={handleChangeScript}
                            sx={{ pt: 2 }}
                            ButtonsProps={{
                                sx: {
                                    fontSize: (theme) => theme.typography.smRegular.fontSize,
                                    px: 3,
                                    whiteSpace: 'nowrap'
                                }
                            }}
                        />
                    </Grid>
                )}
                <Grid item xs={12} sm order={{ xs: 2 }}>
                    <Select
                        fullWidth
                        options={coinOptions}
                        label="Coin"
                        value={coinType}
                        onChange={handleChangeCoin}
                        sx={{ minWidth: 140 }}
                    />
                </Grid>
                <Grid item order={{ xs: 4 }}>
                    <ToggleButtons
                        options={hardenedOptions}
                        selected={isHardened ? 'hardened' : 'normal'}
                        onChange={handleChangeHardened}
                        sx={{ pt: 2 }}
                        ButtonsProps={{
                            sx: { fontSize: (theme) => theme.typography.smRegular.fontSize, px: 3 }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm order={{ xs: 3 }}>
                    <Input
                        label="Derivation Path"
                        // multiline
                        fullWidth
                        value={path}
                        iconPosition="start"
                        icon={master}
                        iconProps={{
                            disableTypography: true,
                            disablePointerEvents: true,
                            sx: {
                                userSelect: 'none',
                                marginRight: '0 !important',
                                color: (theme: Theme) => `${theme.palette.primary.main} !important`
                            }
                        }}
                        // error={!!value && checkLength(value)}
                        // helperText={
                        //     !!value && checkLength(value) && 'The number of characters must be equal 32, 40, 48, 56, 64'
                        // }
                        onChange={handleChangePath}
                        sx={{ minWidth: 140, '& input': { pl: '0 !important' } }}
                        // InputProps={{
                        // spellCheck: false
                        // sx: { fontFamily: 'Monospace' },
                        // shrink: true
                        //>}}
                    />
                </Grid>
                <Grid item order={{ xs: 5 }}>
                    <Switch
                        label="Show balances"
                        labelPlacement="end"
                        checked={isHardened}
                        // onChange={handleChangeHardened}
                    />
                </Grid>
            </Grid>

            <Box sx={{ mb: 4 }}>
                <Accordion
                    expanded={expandedPanel.includes('address-panel-2')}
                    elevation={0}
                    variant="outlined"
                    // sx={{ border: (theme: Theme) => `1px solid ${theme.palette.divider}` }}
                    onChange={onExpandPanel('address-panel-2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="address-panel-2"
                        id="address-panel-2"
                    >
                        <Typography>Extended Derived Keys</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Input
                            label="Derived Extended Private Key"
                            multiline
                            value={extendedDerivedPrivateKey}
                            fullWidth
                            margin="dense"
                            disabled
                            // variant="filled"
                        />
                        <Input
                            label="Derived Extended Public Key"
                            multiline
                            value={extendedDerivedPublicKey}
                            fullWidth
                            margin="dense"
                            disabled
                            // variant="filled"
                        />
                    </AccordionDetails>
                </Accordion>
            </Box>

            <b>
                {/* eslint-disable-next-line no-plusplus */}
                Derivation RENDER COUNT: {++rendersCount.current}
            </b>
        </>
    );
};

export default React.memo(AddressDerivation);
