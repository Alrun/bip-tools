import React from 'react';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';

export interface ToggleButtonsOption {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * The color of the button when it is in an active state.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
     *
     * @default 'primary'
     */
    color?: ToggleButtonGroupProps['color'];
    /**
     * If `true`, the component is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     *
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If `true`, the button will take up the full width of its container.
     *
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Callback fired when the state changes.
     *
     * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
     * @param {any} value of the selected button.
     */
    onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
    /**
     * Callback fired when the button is clicked.
     *
     * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
     * @param {any} value of the selected button.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
    /**
     * If `true`, the button is rendered in an active state.
     */
    selected?: boolean;
    /**
     * The size of the component.
     * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
     *
     * @default 'medium'
     */
    size?: ToggleButtonGroupProps['size'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: ToggleButtonGroupProps['sx'];
    /**
     * The value to associate with the button when selected in a ToggleButtonGroup.
     */
    value: string | number;
}

export interface ToggleButtonsProps {
    /**
     * Props for any ToggleButton component in ToggleButtons.
     */
    ButtonsProps?: Omit<ToggleButtonsOption, 'value'>;
    /**
     * The color of the button when it is in an active state.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
     *
     * @default 'primary'
     */
    color?: ToggleButtonGroupProps['color'];
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the button group will take up the full width of its container.
     *
     * @default false
     */
    fullWidth?: boolean;
    /**
     * If `true`, only allow one of the child ToggleButton values to be selected.
     *
     * @default false
     */
    isAllowUnselected?: boolean;
    /**
     * Allow multiple selected items.
     *
     * Prop select must be `Array<string | number>`.
     */
    isMultiple?: boolean;
    /**
     * Callback fired when the state changes.
     *
     * @param {any} value of the selected button.
     */
    onChange?: (value: any) => void;
    /**
     * ToggleButton list.
     */
    options: ToggleButtonsOption[];
    /**
     * The component orientation (layout flow direction).
     *
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Current selected items.
     */
    selected?: string | number | (string | number)[];
    /**
     * The size of the component.
     *
     * @default 'medium'
     */
    size?: ToggleButtonGroupProps['size'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: ToggleButtonGroupProps['sx'];
    /**
     * The currently selected value within the group or an array of selected
     * values when `exclusive` is false.
     *
     * The value must have reference equality with the option in order to be selected.
     */
    value?: any;
}
