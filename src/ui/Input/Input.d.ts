import * as React from 'react';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';

export interface InputProps extends BaseTextFieldProps {
    /**
     * The content of the component, normally an `Icon` or string.
     */
    icon?: React.ReactNode;
    /**
     * The position this adornment should appear relative to the `Input`.
     * @default 'start'
     */
    iconPosition?: 'start' | 'end';
    /**
     * Callback fired when the value is changed.
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing event.target.value (string).
     */
    onChange?: StandardInputProps['onChange']
}
