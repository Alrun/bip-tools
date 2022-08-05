import React from 'react';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';

export interface InputProps extends Omit<BaseTextFieldProps, 'hiddenLabel'> {
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string;
    /**
     * If `true`, the `input` element is focused during the first mount.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
     * @default primary
     */
    color?: BaseTextFieldProps['color'];
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: string;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     * @default false
     */
    error?: boolean;
    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The helper text content.
     */
    helperText?: React.ReactNode;
    /**
     * The content of the component, normally an `Icon` or string.
     */
    icon?: React.ReactNode;
    /**
     * The position this adornment should appear relative to the `Input`.
     * @default 'start'
     */
    iconPosition?: 'start' | 'end';

    iconProps?: any;
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id?: string;
    /**
     * Props applied to the Input element.
     * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
     * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
     * component depending on the `variant` prop value.
     */
    InputProps?: PropTypes.object;
    /**
     * Callback fired when the value is changed.
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing event.target.value (string).
     */
    onChange?: BaseTextFieldProps['onChange'];
    /**
     * The label content.
     */
    label?: React.ReactNode;
    /**
     * If `true`, a `textarea` element is rendered instead of an input.
     * @default false
     */
    multiline?: boolean;
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: BaseTextFieldProps['maxRows'];
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows?: BaseTextFieldProps['minRows'];
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    onBlur?: BaseTextFieldProps['onBlur'];
    onFocus?: BaseTextFieldProps['onFocus'];
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required?: boolean;
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: BaseTextFieldProps['rows'];
    /**
     * The size of the component.
     */
    size?: BaseTextFieldProps['size'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: BaseTextFieldProps['sx'];
    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     */
    type?: BaseTextFieldProps['type'];
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: unknown;
}
