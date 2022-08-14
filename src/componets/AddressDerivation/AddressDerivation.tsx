import React from 'react';
import debounce from 'lodash/debounce';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { filterStr } from '../../utils/crypto/crypto';
import coinTypeList from '../../libs/bip44/coinTypeList';
import { getPath } from '../../libs/bips/bips';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import Switch from '../../ui/Switch/Switch';
import Accordion from '../../ui/Accordiron/Accordion';
import ToggleButtons from '../../ui/ToggleButtons/ToggleButtons';
import { AddressDerivationProps } from './AddressDerivation.d';
import formatPathValue from '../../libs/bip44/formatPathValue/formatPathValue';
import { Bip, Script } from '../../libs/bips/bips.d';

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
    coinType,
    extendedDerivedPrivateKey = '',
    extendedDerivedPublicKey = '',
    expandedPanel,
    isHardened,
    derivationPath,
    script,
    showBalances,
    onChangeBip,
    onChangeCoin,
    onChangeHardened,
    onExpandPanel,
    onChangePathDerivation,
    onChangeScript,
    onChangeShowBalances
}: AddressDerivationProps) => {
    const [master, setMaster] = React.useState(() => getPath(bip, coinType));
    const [path, setPath] = React.useState(() => derivationPath);
    const [bipValue, setBipValue] = React.useState<Bip>(bip);

    const delayedPathChangeHandle = React.useCallback(
        debounce((nextPath: string) => onChangePathDerivation(nextPath), 300),
        []
    );

    const handleChangeBip = (val: Bip | null) => {
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
        if (val) onChangeScript(val);
    };

    const handleChangePath = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const chars = "0123456789hH'/";
        const filteredValue = filterStr(e.target.value, chars)
            .replace(/[h']+/g, "'")
            .replace(/\/+/g, '/')
            .replace(/^[/']/g, '')
            .replace(/^['.+$]/g, '');

        const validatedValue = filteredValue
            .split('/')
            .map((item) => formatPathValue(item))
            .join('/');

        setPath(validatedValue);
        delayedPathChangeHandle(validatedValue);
    };

    React.useEffect(() => {
        setPath(derivationPath);
    }, [derivationPath]);

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
                        onChange={handleChangePath}
                        sx={{ minWidth: 140, '& input': { pl: '0 !important' } }}
                    />
                </Grid>
                <Grid item order={{ xs: 5 }}>
                    <Switch
                        label="Show balances"
                        labelPlacement="end"
                        checked={showBalances}
                        onChange={(_, checked) => onChangeShowBalances(checked)}
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
                        />
                        <Input
                            label="Derived Extended Public Key"
                            multiline
                            value={extendedDerivedPublicKey}
                            fullWidth
                            margin="dense"
                            disabled
                        />
                    </>
                </Accordion>
            </Box>
        </>
    );
};

export default React.memo(AddressDerivation);
