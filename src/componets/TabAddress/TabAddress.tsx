import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Alert, AlertTitle, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Button from '../../ui/Button/Button';
import Typography from '../../ui/Typography/Typography';
import Select from '../../ui/Select/Select';
import Checkbox from '../../ui/Checkbox/Checkbox';
import { HideIcon, ShowIcon } from '../../ui/Icons/Icons';
import Input from '../../ui/Input/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Derivation from '../Derivation/Derivation';
import useCopyToClipboard from '../../hooks/useCopyToClipboard/useCopyToClipboard';
import Switch from '../../ui/Switch/Switch';

function createData(path: string, address: string, publicKey: string, privateKey: string) {
    return { path, address, publicKey, privateKey };
}

const rows = [
    createData(
        "m/49'/0'/0'/0/0",
        '38RnvRxrBkXT7oTwuUBCi12bcZ8jkz1hLU',
        '0211a35b50fa9978f2574792e4bb0133e570a1487fda4368c14badc7f885b0fcfa',
        'L4h83LK8RZdn8KR2iSkitqsjL4gLHo8CHgbAhYHp6uwMH74HEmJV\n'
    ),
    createData(
        "m/49'/0'/0'/0/1",
        '3EHVkweEcPat1vn7gVBK2CVLgpVpsoSBhX',
        '02d247d45909e824a5cb7815094e0f763485cd88b26d715edd6483158627fc8c00',
        'KxHSYQLTvW8teHLZVPtRyBKxW85sGMU9b3h5MKjg6RFGkPiNufgp\n'
    ),
    createData(
        "m/49'/0'/0'/0/2",
        '3HVgj36w2PR2vunyBULD4zMj4rdgSwz69S',
        '0261feb1ee0b105b5514f3d45eec65936511754fe4a450ed49e54513e93baf4e19',
        'L2pKAvPcrZLKAmqNTqoEnVEDkg3nV2L3vgMuPC1dtV4NL7nM4vZg'
    ),
    createData(
        "m/49'/0'/0'/0/3",
        '3K55uAiT7JDmx1DA8GMv9chjgxsMXm68sJ',
        '028abcb43d7e2ca014a60e3d4430aba1dc4ecb0defdfb32bd7107a784635303f10',
        'L4Qr4bsPV6jiuM39fLJLLrzrA9gMdkXZQSV794Q9Ut1SgigJBKDw\n'
    ),
    createData(
        "m/49'/0'/0'/0/4",
        '36n14AQ4BzGctXTUKSmygHw1CNdCyKHhr6',
        '039cfef68e26fa451d1b02a215d1f6e4b0dad7efc3d893ca104b22db4063ed845c',
        'KzSvYt9L3MndbFJgeBCyag56kRkeiK3cu86aEgWxczH8uHjVfzi8'
    )
];

const balance = [
    { address: '38RnvRxrBkXT7oTwuUBCi12bcZ8jkz1hLU', value: 0 },
    { address: '3EHVkweEcPat1vn7gVBK2CVLgpVpsoSBhX', value: 0 },
    { address: '3HVgj36w2PR2vunyBULD4zMj4rdgSwz69S', value: 0 },
    { address: '3K55uAiT7JDmx1DA8GMv9chjgxsMXm68sJ', value: 0 }
];

const SlideTransition = ({ children, ...props }: SlideProps) => (
    <Slide {...props} direction="up">
        {children}
    </Slide>
);

interface ButtonCopyProps {
    tooltipText: string;
    onClick: () => {};
}

const ButtonCopy = ({ tooltipText, onClick }: ButtonCopyProps) => (
    <Tooltip title={tooltipText}>
        <div>
            <Button isRound size="small" onClick={onClick}>
                <ContentCopyIcon fontSize="inherit" />
            </Button>
        </div>
    </Tooltip>
);

const ButtonQrCode = ({ tooltipText }: any) => (
    <Tooltip title={tooltipText}>
        <div>
            <Button isRound size="small">
                <QrCode2Icon fontSize="inherit" />
            </Button>
        </div>
    </Tooltip>
);

const TabAddress = (props: any) => {
    const [copy, setCopy] = React.useState('');
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), { noSsr: true });
    const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'), { noSsr: true });
    const showBalance = true;

    // const [status, message] = useCopyToClipboard(copy, );

    const [showSnack, setShowSnack] = React.useState(false);

    const handleClick = () => {
        setShowSnack(true);
    };

    const handleClose = () => {
        setShowSnack(false);
    };

    const handleCopy = (text: string) => async () => {
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(text);
            handleClick();
        } else {
            console.log('error');
        }
    };

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Alert severity="warning" sx={{mb: 6}}>This section is a work in progress!</Alert>
            <Box sx={{mb: 4}}>
                <Input
                    label="Seed"
                    multiline
                    value="56b73850080d1d7e8a777ef5d6b1a73b6a983fe3e74b80ca9775443165f12b9ff31d543d807b725b459e8e1761093256f0493cc5ba240653db9c425e18afa1a1"
                    fullWidth
                    // margin="dense"
                    // variant="filled"
                    // disabled
                    helperText="Changing this field will clear the existing mnemonic and passphrase."
                />
            </Box>

            <Box sx={{ mb: 4 }}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    elevation={0}
                    variant="outlined"
                    // sx={{ border: (theme: Theme) => `1px solid ${theme.palette.divider}` }}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>Extended</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Derivation />
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item>
                    <ToggleButtonGroup
                        color="primary"
                        value="bip32"
                        exclusive
                        size="small"
                        sx={{ mr: 6 }}
                        // onChange={handleChangeWords}
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
                        <ToggleButton sx={{ px: 3 }} value="bip141" disabled>
                            BIP141
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid>
                    <Select
                        options={[{value: 'bitcoin', label: 'BTC'}, {value: 'ethereum', label: 'ETH'}]}
                        label="Coin"
                        value='bitcoin'
                        // onChange={handleChangeLang}
                        sx={{ width: 120, mr: 2 }}
                    />
                </Grid>
                <Grid item sx={{ display: 'flex' }} marginLeft="auto" alignItems="center">
                    <Checkbox label="Hardened" />
                </Grid>
            </Grid>
            <Box sx={{mb: 6}}>
                <Input
                    label="Derivation Path"
                    multiline
                    value="0'/0/0"
                    iconPosition="start"
                    icon="m/49'/0'/"
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
                    // onChange={handleChange}
                    // sx={{ width: '100%' }}
                    // InputProps={{
                    // spellCheck: false
                    // sx: { fontFamily: 'Monospace' },
                    // shrink: true
                    //>}}
                />
            </Box>

            {lgUp ? (
                <TableContainer>
                    <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table" padding="none">
                        <TableHead>
                            <TableRow>
                                {xlUp ? (
                                    <>
                                        <TableCell sx={{ pr: 6 }}>Path</TableCell>
                                        <TableCell align="right" sx={{ pr: 6 }}>
                                            Address
                                        </TableCell>
                                    </>
                                ) : (
                                    <TableCell sx={{ pr: 6 }}>Path / Address</TableCell>
                                )}
                                {showBalance && (
                                    <TableCell align="right" sx={{ pr: 6 }}>
                                        Balance
                                    </TableCell>
                                )}
                                <TableCell align="right">Keys</TableCell>
                                <TableCell align="right" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.path} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    {xlUp ? (
                                        <>
                                            <TableCell scope="row" sx={{ pr: 6 }}>
                                                <Typography variant="smRegular">{row.path}</Typography>
                                            </TableCell>
                                            <TableCell align="right" sx={{ pr: 6 }}>
                                                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                    <Typography>{row.address}</Typography>
                                                    <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.address)} />
                                                </Box>
                                            </TableCell>
                                        </>
                                    ) : (
                                        <TableCell scope="row" sx={{ pr: 6 }}>
                                            <Typography component="div" variant="smRegular" sx={{ mr: 3 }}>
                                                {row.path}
                                            </Typography>

                                            <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                                <Typography sx={{ mr: 1 }}>{row.address}</Typography>
                                                <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.address)} />
                                            </Box>
                                        </TableCell>
                                    )}
                                    {showBalance && (
                                        <TableCell align="right" sx={{ pr: 6 }}>
                                            <Typography>0</Typography>
                                        </TableCell>
                                    )}
                                    <TableCell align="right">
                                        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <Typography variant="smRegular" sx={{ mr: 1 }}>
                                                {row.publicKey}
                                            </Typography>
                                            <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.publicKey)} />
                                        </Box>
                                        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <Typography sx={{ mr: 1 }}>{row.privateKey}</Typography>
                                            <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.privateKey)} />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <ButtonQrCode tooltipText="QR code" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Box>
                    {rows.map((row) => (
                        <Box key={row.path} sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
                                <Typography variant="smBold" sx={{ mr: 2 }}>
                                    Path:
                                </Typography>
                                <Typography variant="smRegular" sx={{ wordBreak: 'break-word' }}>
                                    {row.path}
                                </Typography>
                            </Box>

                            <Grid container sx={{ mb: 0 }} alignItems="center">
                                <Grid item>
                                    <Typography sx={{ mr: 2, fontWeight: 'bolder' }}>Address:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ wordBreak: 'break-word', mr: 2 }}>{row.address}</Typography>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.address)} />
                                        <ButtonQrCode tooltipText="QR code" />
                                    </Box>
                                </Grid>
                            </Grid>

                            {showBalance && (
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
                                    <Typography sx={{ mr: 2, fontWeight: 'bolder' }}>Balance:</Typography>
                                    <Typography sx={{ wordBreak: 'break-word' }}>0</Typography>
                                </Box>
                            )}

                            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0, mt: 2 }}>
                                <Typography variant="smBold" sx={{ mr: 2 }}>
                                    Keys
                                </Typography>
                            </Box>

                            <Grid container sx={{ mb: 0 }} alignItems="center">
                                <Grid item>
                                    <Typography sx={{ mr: 2, fontWeight: 'bolder' }}>Public:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ wordBreak: 'break-word', mr: 2 }}>{row.publicKey}</Typography>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.publicKey)} />
                                        <ButtonQrCode tooltipText="QR code" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ mb: 0 }} alignItems="center">
                                <Grid item>
                                    <Typography sx={{ mr: 2, fontWeight: 'bolder' }}>Private:</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ wordBreak: 'break-word', mr: 2 }}>{row.privateKey}</Typography>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ButtonCopy tooltipText="Copy" onClick={handleCopy(row.privateKey)} />
                                        <ButtonQrCode tooltipText="QR code" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Divider sx={{ pt: 2 }} />
                        </Box>
                    ))}
                </Box>
            )}
            <Snackbar
                autoHideDuration={1500}
                open={showSnack}
                onClose={handleClose}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                key="Copied"
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

export default TabAddress;
