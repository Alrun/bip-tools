import React from 'react';
import { SwitchProps } from './Switch.d';
import { StyledSwitch, StyledSwitchFormControlLabel } from './SwitchStyles';

const Switch = ({ label, size = 'medium', formControlLabelProps, labelPlacement, ...props }: SwitchProps) => (
    <StyledSwitchFormControlLabel
        size={size}
        label={label}
        labelPlacement={labelPlacement}
        control={<StyledSwitch size={size} {...props} />}
        {...formControlLabelProps}
    />
);

export default Switch;
