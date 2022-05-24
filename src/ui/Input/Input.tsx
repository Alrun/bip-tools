import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import StyledInput from './InputStyles';
import { InputProps } from './Input.d';

const Input = ({ icon, iconPosition = 'start', iconProps, ...props }: InputProps) => (
    <StyledInput
        InputProps={{
            startAdornment: icon && iconPosition === 'start' && (
                <InputAdornment position={iconPosition} {...iconProps}>
                    {icon}
                </InputAdornment>
            ),
            endAdornment: icon && iconPosition === 'end' && (
                <InputAdornment position={iconPosition} {...iconProps}>
                    {icon}
                </InputAdornment>
            )
        }}
        {...props}
    />
);

export default Input;
