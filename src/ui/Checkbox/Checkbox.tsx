import React from 'react';
import { FormGroup } from '@mui/material';
import { CheckboxProps } from './Checkbox.d';
import { StyledCheckbox, StyledCheckboxFormControlLabel } from './CheckboxStyles';

const Checkbox = ({ label, size = 'medium', labelPlacement, ...props }: CheckboxProps) =>
    label ? (
        <FormGroup>
            <StyledCheckboxFormControlLabel
                size={size}
                label={label}
                labelPlacement={labelPlacement}
                control={
                    <StyledCheckbox
                        size={size}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...props}
                    />
                }
            />
        </FormGroup>
    ) : (
        <StyledCheckbox
            size={size}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
        />
    );

export default Checkbox;
