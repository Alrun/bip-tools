import React from 'react';
import copy from 'copy-to-clipboard';
import Snackbar from '../../ui/Snackbar/Snackbar';
import Tooltip from '../../ui/Tooltip/Tooltip';
import Button from '../../ui/Button/Button';
import { CopyIcon } from '../../ui/Icons/Icons';
import { ButtonCopyProps } from './ButtonCopy.d';

const ButtonCopy = ({
    text,
    tooltipText = 'Copy',
    snackText = 'Copied to clipboard!',
    ButtonProps,
    TooltipProps
}: ButtonCopyProps) => {
    const [showSnack, setShowSnack] = React.useState(false);

    const handleClick = () => {
        if (text) {
            copy(text);
            setShowSnack(true);
        }
    };

    const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;

        setShowSnack(false);
    };

    return (
        <>
            <Tooltip title={tooltipText} {...TooltipProps}>
                <Button isRound size="small" onClick={handleClick} {...ButtonProps}>
                    <CopyIcon fontSize="inherit" />
                </Button>
            </Tooltip>
            <Snackbar
                open={showSnack}
                onClose={handleClose}
                message={snackText}
                key={text}
                AlertProps={{
                    onClose: handleClose
                }}
            />
        </>
    );
};

export default ButtonCopy;
