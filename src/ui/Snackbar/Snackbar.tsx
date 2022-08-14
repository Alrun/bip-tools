import React from 'react';
import Alert from '../Alert/Alert';
import { SnackbarProps } from './Snackbar.d';
import { StyledSnackbar } from './SnackbarStyles';
import { SlideUp } from '../Transitions/Transitions';

const Snackbar = ({
    message,
    children,
    autoHideDuration = 1500,
    TransitionComponent = SlideUp,
    anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
    AlertProps,
    ...props
}: SnackbarProps) => (
    <StyledSnackbar
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        TransitionComponent={TransitionComponent}
        key={message}
        {...props}
    >
        <div>
            <Alert {...AlertProps}>{message}</Alert>
        </div>
    </StyledSnackbar>
);

export default Snackbar;
