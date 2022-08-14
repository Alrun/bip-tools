import React from 'react';
import { InputProps } from '../Input/Input.d'

export interface SelectOptions {
    /**
     * The value of the option.
     */
    value: string | number;
    /**
     * A text representation of the option's content.
     */
    label: React.ReactNode;
    /**
     * If true, the option will be disabled.
     */
    disabled?: boolean;
}

export interface SelectProps
    extends Omit<InputProps,
        'autoComplete'
        | 'icon'
        | 'iconPosition'
        | 'hiddenLabel'
        | 'maxRows'
        | 'minRows'
        | 'multiline'
        | 'placeholder'
        | 'rows'
        | 'type'
        | 'value'> {
    /**
     * Array of options to be rendered in the list.
     */
    options: Readonly<Array<string | number | SelectOptionsInterface>>;
    /**
     * The default value.
     */
    defaultValue?: any;
    /**
     * If true, the component uses a native select element.
     */
    native?: boolean;
    /**
     * Enable auto native view on touch.
     *
     * @default true
     */
    nativeOnTouch?: boolean;
    /**
     * Adds an empty option on the native selection if no default value is passed.
     *
     * @default 'Not selected'
     */
    nativeEmptyOptionText?: string;
    /**
     * Text to display when there are no options.
     *
     * @default 'No options'
     */
    noOptionsText?: React.ReactNode;
    /**
     * If true, the component is initially open.
     */
    defaultOpen?: boolean;
    /**
     * Specifies the maximum number of menu items to display.
     *
     * @default 8
     */
    maxItem?: number;
    /**
     * If true, the menu will support multiple selections.
     */
    multiple?: boolean;
    /**
     * The input value.
     */
    value?: any;
}
