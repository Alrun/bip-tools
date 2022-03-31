import React from 'react';
import { FormGroup } from '@mui/material';
import { StyledRadioFormControlLabel, StyledRadio } from './RadioStyles';
import { RadioPropsInterface } from './Radio.d';

const Radio = ({ label, size = 'medium', labelPlacement, ...props }: RadioPropsInterface) =>
    label ? (
        <FormGroup>
            <StyledRadioFormControlLabel
                size={size}
                label={label}
                labelPlacement={labelPlacement}
                control={
                    <StyledRadio
                        size={size}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...props}
                    />
                }
            />
        </FormGroup>
    ) : (
        <StyledRadio
            size={size}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
        />
    );

export default Radio;
