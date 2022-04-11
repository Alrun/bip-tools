import React from 'react';
import { StyledButton, StyledIconButton } from './ButtonStyles';
import { ButtonProps } from './Button.d';

const Button = ({ isRound, size = 'medium', variant = 'contained', ...props }: ButtonProps) =>
    isRound ? <StyledIconButton size={size} {...props} /> : <StyledButton variant={variant} size={size} {...props} />;

export default Button;
