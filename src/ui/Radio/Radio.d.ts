import { RadioProps as MuiRadioProps } from '@mui/material/Radio/Radio';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';

export interface RadioProps
    extends Omit<
        MuiRadioProps,
        'action' | 'centerRipple' | 'focusVisibleClassName' | 'LinkComponent' | 'TouchRippleProps' | 'touchRippleRef'
    > {
    /**
     * If `true`, the component is checked.
     * @default false
     */
    checked?: boolean;
    /**
     * Override or extend the styles applied to the component.
     * @default 'primary'
     */
    color?: MuiRadioProps['color'];
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the ripple effect is disabled.
     * @default false
     */
    disableRipple?: boolean;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps?: SwitchBaseProps['inputProps'];
    /**
     * Attributes applied to the root label element.
     */
    formControlLabelProps?: Partial<FormControlLabelProps>;
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: SwitchBaseProps['onChange'];
    /**
     * A text representation of the checkbox content.
     */
    label: FormControlLabelProps['label'];
    /**
     * The position of the label.
     * @default 'end'
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    /**
     * If `true`, the `input` element is required.
     * @default false
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
