import React from 'react';
import { SwitchProps } from './Switch.d';
import { StyledSwitch, StyledSwitchFormControlLabel } from './SwitchStyles';

const Switch = ({ label, size = 'medium', labelPlacement, ...props }: SwitchProps) => (
    <StyledSwitchFormControlLabel
        size={size}
        label={label}
        labelPlacement={labelPlacement}
        control={
            <StyledSwitch
                size={size}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...props}
            />
        }
    />
);

export default Switch;
