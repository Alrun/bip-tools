import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch/Switch';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';

export interface SwitchProps
    extends Omit<
        MuiSwitchProps,
        'action' | 'centerRipple' | 'focusVisibleClassName' | 'LinkComponent' | 'TouchRippleProps' | 'touchRippleRef'
    > {
    /**
     * If 'true', the component is checked.
     *
     * @default false
     */
    checked?: boolean;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
     *
     * @default 'primary'
     */
    color?: MuiSwitchProps['color'];
    /**
     * The default checked state. Use when the component is not controlled.
     *
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * If 'true', the component is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If 'true', the ripple effect is disabled.
     *
     * @default false
     */
    disableRipple?: boolean;
    /**
     * Attributes applied to the root label element.
     */
    formControlLabelProps?: Partial<FormControlLabelProps>;
    /**
     * The id of the 'input' element.
     */
    id?: string;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the 'input' element.
     */
    inputProps?: SwitchBaseProps['inputProps'];
    /**
     * A text representation of the checkbox content.
     */
    label: FormControlLabelProps['label'];
    /**
     * The position of the label.
     *
     * @default 'end'
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new value by accessing 'event.target.value' (string).
     * You can pull out the new checked state by accessing 'event.target.checked' (boolean).
     */
    onChange?: SwitchBaseProps['onChange'];
    /**
     * If 'true`, the `input` element is required.
     *
     * @default false
     */
    required?: boolean;
    /**
     * The size of the component.
     * `small` is equivalent to the dense switch styling.
     *
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
    value?: unknown;
}
