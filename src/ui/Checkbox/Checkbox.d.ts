import * as React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export interface CheckboxProps
    extends Omit<
        MuiCheckboxProps,
        'action' | 'centerRipple' | 'LinkComponent' | 'onFocusVisible' | 'TouchRippleProps' | 'touchRippleRef'
    > {
    /**
     * If `true`, the component is checked.
     */
    checked?: boolean;
    /**
     * The icon to display when the component is checked.
     * @default <CheckBoxIcon />
     */
    checkedIcon?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    color?: MuiCheckboxProps['color'];
    /**
     * If `true`, the component is disabled.
     */
    disabled?: MuiCheckboxProps['disabled'];
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;
    /**
     * The icon to display when the component is unchecked.
     * @default <CheckBoxOutlineBlankIcon />
     */
    icon?: React.ReactNode;
    /**
     * The id of the `input` element.
     */
    id?: MuiCheckboxProps['id'];
    /**
     * If `true`, the component appears indeterminate.
     * This does not set the native input element to indeterminate due
     * to inconsistent behavior across browsers.
     * However, we set a `data-indeterminate` attribute on the `input`.
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The icon to display when the component is indeterminate.
     * @default <IndeterminateCheckBoxIcon />
     */
    indeterminateIcon?: React.ReactNode;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps?: MuiCheckboxProps['inputProps'];
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * The label element.
     */
    label?: FormControlLabelProps['label'];
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: MuiCheckboxProps['onChange'];
    /**
     * If `true`, the `input` element is required.
     */
    required?: MuiCheckboxProps['required'];
    /**
     * The size of the component.
     * `small` is equivalent to the dense checkbox styling.
     * @default 'medium'
     */
    size?: MuiCheckboxProps['size'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiCheckboxProps['sx'];
    /**
     * The value of the component. The DOM API casts this to a string.
     * The browser uses "on" as the default value.
     */
    value?: MuiCheckboxProps['value'];
}
