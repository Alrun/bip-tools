import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import { StyledRadioFormControlLabel, StyledRadio } from './RadioStyles';
import { RadioGroupProps, RadioProps } from './Radio.d';

const Radio = ({ label, size = 'medium', formControlLabelProps, labelPlacement, ...props }: RadioProps) => (
    <StyledRadioFormControlLabel
        size={size}
        label={label}
        labelPlacement={labelPlacement}
        sx={{ mr: 8 }}
        control={<StyledRadio size={size} {...props} />}
        {...formControlLabelProps}
    />
);

export const RadioGroup = ({ defaultValue, options, row, ...props }: RadioGroupProps) => (
    <MuiRadioGroup row={row} defaultValue={defaultValue}>
        {options.map(({ label, value, disabled, size, labelPlacement }) => (
            <Radio
                key={value}
                label={label}
                value={value}
                disabled={disabled}
                size={size}
                labelPlacement={labelPlacement}
                {...props}
            />
        ))}
    </MuiRadioGroup>
);

export default Radio;
