import React from 'react';
import { InputProps } from '../Input/Input.d'

export interface SelectOptionsInterface {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}

export interface SelectProps extends Omit<InputProps, 'hiddenLabel'> {
    options: SelectOptionsInterface[];
    defaultValue?: string;
    native?: boolean;
    /**
     * Adds an empty option on the native selection if no default value is passed
     * @default 'Not selected'
     */
    nativeEmptyOptionLabel?: string;
    defaultOpen?: boolean;
    /**
     * @default 8
     */
    maxItem?: number;
    multiple?: boolean;
}
