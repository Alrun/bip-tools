import React from 'react';
import { StyledButton, StyledIconButton } from './ButtonStyles';
import { ButtonProps } from './Button.d';

const Button = ({ isRound, size = 'medium', variant, ...props }: ButtonProps) =>
    isRound ? (
        <StyledIconButton variant={variant} size={size} centerRipple {...props} />
    ) : (
        <StyledButton variant={variant || 'contained'} size={size} {...props} />
    );

export default Button;
