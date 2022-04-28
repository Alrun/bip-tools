import React from 'react';
import { FormGroup } from '@mui/material';
import { CheckboxProps } from './Checkbox.d';
import { StyledCheckbox, StyledCheckboxFormControlLabel } from './CheckboxStyles';

const Checkbox = ({ label, size = 'medium', labelPlacement, formGroupProps, ...props }: CheckboxProps) =>
    label ? (
        <FormGroup {...formGroupProps}>
            <StyledCheckboxFormControlLabel
                size={size}
                label={label}
                labelPlacement={labelPlacement}
                control={<StyledCheckbox size={size} {...props} />}
            />
        </FormGroup>
    ) : (
        <StyledCheckbox size={size} {...props} />
    );

export default Checkbox;
