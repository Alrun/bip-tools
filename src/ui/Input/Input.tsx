import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledInput } from './InputStyles';
import { InputProps } from './Input.d';

const Input = ({ icon, iconPosition = 'start', ...props }: InputProps) => (
    <StyledInput
        InputProps={{
            startAdornment: icon && iconPosition === 'start' && (
                <InputAdornment position={iconPosition}>{icon}</InputAdornment>
            ),
            endAdornment: icon && iconPosition === 'end' && (
                <InputAdornment position={iconPosition}>{icon}</InputAdornment>
            )
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
);

export default Input;
