import React from 'react';
import { FormGroup } from '@mui/material';
import { SwitchPropsInterface } from './Switch.d';
import { StyledSwitch, StyledSwitchFormControlLabel } from './SwitchStyles';

const Switch = ({ label, size = 'medium', labelPlacement, ...props }: SwitchPropsInterface) =>
    label ? (
        <FormGroup>
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
        </FormGroup>
    ) : (
        <StyledSwitch
            size={size}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
        />
    );

export default Switch;
