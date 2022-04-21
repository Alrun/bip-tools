import React from 'react';
import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch/Switch';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export interface SwitchProps
    extends Omit<
        MuiSwitchProps,
        'action' | 'centerRipple' | 'LinkComponent' | 'onFocusVisible' | 'TouchRippleProps' | 'touchRippleRef'
    > {
    /**
     * If `true`, the component is checked.
     */
    checked?: boolean;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
     * @default 'primary'
     */
    color?: MuiSwitchProps['color'];
    /**
     * The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the component is disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;
    /**
     * The icon to display when the component is unchecked.
     */
    icon?: React.ReactNode;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * The label element.
     */
    label: FormControlLabelProps['label'];
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    /**
     * If `true`, the `input` element is required.
     */
    required?: boolean;
    /**
     * The size of the component.
     * `small` is equivalent to the dense switch styling.
     * @default 'medium'
     */
    size?: MuiSwitchProps['size'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiSwitchProps['sx'];
    /**
     * The value of the component. The DOM API casts this to a string.
     * The browser uses "on" as the default value.
     */
    value?: any;
}
