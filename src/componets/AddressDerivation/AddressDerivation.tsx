import React from 'react';
import { Theme } from '@mui/material/styles';
import Accordion from '../../ui/Accordiron/Accordion';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
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

const coinOptions = coinTypeList.map(({ coin, type }) => ({ label: coin, value: type }));

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

    const handleChangeBip = (e: React.MouseEvent<HTMLElement, MouseEvent>, val: BipType | null) => {
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

    const handleChangeHardened = (e: React.MouseEvent<HTMLElement, MouseEvent>, val: 'normal' | 'hardened' | null) => {
        if (val === 'normal') onChangeHardened(false);
        if (val === 'hardened') onChangeHardened(true);
    };

    const handleChangeScript = (e: React.MouseEvent<HTMLElement, MouseEvent>, val: `${Script}` | null) => {
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
                    <ToggleButtonGroup
                        color="primary"
                        value={bipValue}
                        exclusive
                        size="small"
                        // sx={{ width: {xs: '100%'} }}
                        onChange={handleChangeBip}
                    >
                        <ToggleButton sx={{ px: 3 }} value="bip32">
                            BIP32
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value="bip44">
                            BIP44
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value="bip49">
                            BIP49
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value="bip84">
                            BIP84
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                {bip === 'bip32' && (
                    <Grid item xs={12} sm order={{ xs: 1 }}>
                        <ToggleButtonGroup
                            color="primary"
                            // value={scriptValue}
                            value={script}
                            exclusive
                            size="small"
                            // sx={{ mr: 6 }}
                            onChange={handleChangeScript}
                        >
                            <ToggleButton sx={{ px: 3 }} value={Script.P2PKH}>
                                {Script.P2PKH}
                            </ToggleButton>
                            <ToggleButton sx={{ px: 3, whiteSpace: 'nowrap' }} value={Script.P2WPKHP2SH}>
                                {Script.P2WPKHP2SH}
                            </ToggleButton>
                            <ToggleButton sx={{ px: 3 }} value={Script.P2WPKH}>
                                {Script.P2WPKH}
                            </ToggleButton>
                        </ToggleButtonGroup>
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
                    <ToggleButtonGroup
                        color="primary"
                        value={isHardened ? 'hardened' : 'normal'}
                        exclusive
                        size="small"
                        // sx={{ mr: 6 }}
                        onChange={handleChangeHardened}
                    >
                        <ToggleButton sx={{ px: 3 }} value="normal">
                            Normal
                        </ToggleButton>
                        <ToggleButton sx={{ px: 3 }} value="hardened">
                            Hardened
                        </ToggleButton>
                    </ToggleButtonGroup>
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
                    headerText="Extended Derived Keys"
                    expanded={expandedPanel.includes('address-panel-2')}
                    onChange={onExpandPanel('address-panel-2')}
                    AccordionSummaryProps={{
                        'aria-controls': 'address-panel-2-content',
                        id: 'address-panel-2-header'
                    }}
                >
                    <>
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
                    </>
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
