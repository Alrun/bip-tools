import React from 'react';
import { RadioProps as MuiRadioProps } from '@mui/material/Radio/Radio';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export interface RadioProps
    extends Omit<
        MuiRadioProps,
        'action' | 'centerRipple' | 'LinkComponent' | 'onFocusVisible' | 'TouchRippleProps' | 'touchRippleRef'
    > {
    /**
     * If `true`, the component is checked.
     */
    checked?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    color?: MuiRadioProps['color'];
    /**
     * If `true`, the component is disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    /**
     * The label element.
     */
    label: FormControlLabelProps['label'];
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    /**
     * If `true`, the `input` element is required.
     */
    required?: boolean;
    /**
     * The size of the component.
     * `small` is equivalent to the dense radio styling.
     * @default 'medium'
     */
    size?: MuiRadioProps['size'];
    /**
     * The value of the component. The DOM API casts this to a string.
     */
    value?: any;
}

export interface RadioGroupProps {
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue: string | number;
    /**
     * Radio button options.
     */
    options: RadioProps[];
    /**
     * Display group of elements in a compact row.
     * @default false
     */
    row?: boolean;
}
