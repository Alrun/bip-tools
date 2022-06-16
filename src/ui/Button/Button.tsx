import React from 'react';
import { StyledButton, StyledIconButton } from './ButtonStyles';
import { ButtonProps } from './Button.d';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Button = ({ async, isRound, loading, size = 'medium', variant, ...props }: ButtonProps) => {
    if (isRound) return <StyledIconButton variant={variant} size={size} centerRipple {...props} />;

    if (async) {
        const { children, disabled, ...restProps } = props;

        return (
            <StyledButton disabled={disabled || loading} variant={variant || 'contained'} size={size} {...restProps}>
                {loading && (
                    <Box
                        sx={{
                            position: 'absolute',
                            display: 'flex',
                            left: '50%',
                            transform: 'translate(-50%)'
                        }}
                    >
                        <CircularProgress disableShrink color="inherit" size={24} />
                    </Box>
                )}
                <Box sx={{opacity: loading ? 0 : 1}}>
                    {children}
                </Box>

            </StyledButton>
        );
    }

    return <StyledButton variant={variant || 'contained'} size={size} {...props} />;
};

export default Button;
