import React from 'react';
import debounce from 'lodash/debounce';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { filterStr } from '../../utils/crypto/crypto';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const AddressExtended = ({
    seed,
    entropy,
    passphrase,
    onChangeSeed,
    onChangePassphrase,
    expandedPanel,
    onExpandPanel,
    serializedExtendedPrivateKey,
    serializedExtendedPublicKey
}: any) => {
    const [seedValue, setSeedValue] = React.useState(() => seed);
    const [passphraseValue, setPassphraseValue] = React.useState(() => passphrase);
    const [openWarning, setOpenWarning] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [error, setError] = React.useState('');

    const delayedSeedChangeHandle = React.useCallback(
        debounce((nextSeed) => onChangeSeed(nextSeed), 300),
        []
    );

    const delayedPhraseChangeHandle = React.useCallback(
        debounce((eventData) => {
            onChangePassphrase(eventData);
        }, 300),
        []
    );

    const handleChangePassphrase = (e: React.ChangeEvent<HTMLInputElement>) => {
        const editedValue = e.target.value.trimStart();

        setPassphraseValue(editedValue);
        delayedPhraseChangeHandle(editedValue);
    };

    const handleChangeSeedValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const letters = '0123456789abcdef';
        const filteredValue = filterStr(e.target.value, letters, 128);
        const isValidLength = filteredValue.length === 128;

        setSeedValue(filteredValue);

        if (entropy && filteredValue && filteredValue !== seed) {
            setOpenWarning(true);
        } else {
            setOpenWarning(false);
        }

        if (!entropy && isValidLength) {
            delayedSeedChangeHandle(filteredValue);
        } else if (!entropy && !filteredValue) {
            delayedSeedChangeHandle('');
        }

        if (!filteredValue || isValidLength) {
            setError('');
        } else {
            setError(`Must be 128 hexadecimal characters! Current count ${filteredValue.length}.`);
        }
    };

    const handleClickSubmit = () => {
        setOpenWarning(false);
        setDisabled(true);
        delayedSeedChangeHandle(seedValue);
    };

    const handleClickCancel = () => {
        setOpenWarning(false);
        setError('');
        setSeedValue(seed);
    };

    React.useEffect(() => {
        if (seed) {
            setSeedValue(seed);
        }
    }, [seed]);

    React.useEffect(() => {
        setPassphraseValue(passphrase);
    }, [passphrase]);

    React.useEffect(() => {
        if (!entropy) {
            setDisabled(true);
        }
    }, []);

    // TODO: Remove after render check
    const rendersCount = React.useRef(0);

    return (
        <>
            <Collapse in={openWarning}>
                <Alert
                    severity="warning"
                    sx={{ mb: 2 }}
                    action={
                        <Box>
                            <Button variant="text" color="inherit" sx={{ mt: -1 }} onClick={handleClickSubmit}>
                                OK
                            </Button>
                            <Button variant="text" color="inherit" sx={{ mt: -1 }} onClick={handleClickCancel}>
                                Cancel
                            </Button>
                        </Box>
                    }
                >
                    This will clear existing mnemonic and passphrase!
                </Alert>
            </Collapse>
            <Box sx={{ mb: 6 }}>
                <Input
                    label="Seed"
                    multiline
                    fullWidth
                    value={seedValue}
                    onChange={handleChangeSeedValue}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                        spellCheck: false,
                        sx: { fontFamily: '"Roboto Mono", monospace' }
                    }}
                />
            </Box>

            <Box sx={{ mb: 4.5 }}>
                <Accordion
                    expanded={expandedPanel.includes('address-panel-1')}
                    elevation={0}
                    variant="outlined"
                    onChange={onExpandPanel('address-panel-1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="address-panel-1"
                        id="address-panel-1"
                    >
                        <Typography>Extended</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Input
                            label="Passphrase (optional)"
                            value={passphraseValue}
                            disabled={disabled}
                            fullWidth
                            margin="dense"
                            onChange={handleChangePassphrase}
                        />
                        <Input
                            label="Extended Private Key"
                            multiline
                            value={serializedExtendedPrivateKey}
                            fullWidth
                            margin="dense"
                            disabled
                        />
                        <Input
                            label="Extended Public Key"
                            multiline
                            value={serializedExtendedPublicKey}
                            fullWidth
                            margin="dense"
                            disabled
                            InputProps={{
                                spellCheck: false
                            }}
                        />
                    </AccordionDetails>
                    <b>
                        {/* eslint-disable-next-line no-plusplus */}
                        Root RENDER COUNT: {++rendersCount.current}
                    </b>
                </Accordion>
            </Box>
        </>
    );
};

export default React.memo(AddressExtended);
