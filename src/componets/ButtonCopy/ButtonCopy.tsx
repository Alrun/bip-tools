import React from 'react';
import copy from 'copy-to-clipboard';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '../../ui/Tooltip/Tooltip';
import Button from '../../ui/Button/Button';
import { ButtonCopyProps } from './ButtonCopy.d';

const SlideTransition = ({ children, ...props }: SlideProps) => (
    <Slide {...props} direction="up">
        {children}
    </Slide>
);

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

    const handleClose = () => {
        setShowSnack(false);
    };

    return (
        <>
            <Tooltip title={tooltipText} {...TooltipProps}>
                <div
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Button isRound size="small" onClick={handleClick} {...ButtonProps}>
                        <ContentCopyIcon fontSize="inherit" />
                    </Button>
                </div>
            </Tooltip>
            <Snackbar
                autoHideDuration={1500}
                open={showSnack}
                onClose={handleClose}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                key={text}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackText}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ButtonCopy;
