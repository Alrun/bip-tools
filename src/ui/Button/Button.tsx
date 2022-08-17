import React from 'react';
import Box from '@mui/material/Box';
import Preloader from '../Preloader/Preloader';
import { StyledButton, StyledIconButton } from './ButtonStyles';
import { ButtonProps } from './Button.d';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function ButtonRef({ async, isRound, loading, size = 'medium', variant, ...props }: ButtonProps, ref) {
        if (isRound) return <StyledIconButton variant={variant} size={size} centerRipple ref={ref} {...props} />;

        if (async) {
            const { children, disabled, ...other } = props;

            return (
                <StyledButton
                    disabled={disabled || loading}
                    variant={variant || 'contained'}
                    size={size}
                    ref={ref}
                    {...other}
                >
                    {loading && (
                        <Box
                            sx={{
                                position: 'absolute',
                                display: 'flex',
                                left: '50%',
                                transform: 'translate(-50%)'
                            }}
                        >
                            <Preloader color="inherit" size={24} />
                        </Box>
                    )}
                    <Box sx={{ opacity: loading ? 0 : 1 }}>{children}</Box>
                </StyledButton>
            );
        }

        return <StyledButton variant={variant || 'contained'} size={size} {...props} />;
    }
);

export default Button;
