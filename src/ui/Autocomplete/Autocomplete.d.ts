import React from 'react';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import { PopperUnstyledProps } from '@mui/base/PopperUnstyled';
import { InputLabelProps } from '@mui/material/InputLabel';
import { OverridableStringUnion } from '@mui/types';
import { AutocompletePropsSizeOverrides } from '@mui/material/Autocomplete/Autocomplete';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

interface ListboxComponentProps extends React.HTMLAttributes<HTMLElement> {
    maxItems: number;
}

interface AutocompleteProps extends MuiAutocompleteProps{
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
     * @default primary
     */
    color?: BaseTextFieldProps['color'];
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id?: string;
    /**
     * Group options
     * @param option
     * (option) => (option as string)[0].toUpperCase()
     */
    groupBy?: (option: unknown) => string;

    // /**
    //  * The size of the component.
    //  * @default 'medium'
    //  */
    // size?: MuiAutocompleteProps['size'];

    options: any[];
    onChange: (newValue: string) => void;
    /**
     * The label content.
     */
    label?: React.ReactNode;
    maxItems?: number;
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: string;
    /**
     * The variant to use.
     */
    variant?: 'standard' | 'outlined' | 'filled';
    virtualize?: boolean;
}

export interface PopperComponentProps {
    anchorEl?: any;
    disablePortal?: boolean;
    open: boolean;
    children?: any;
}
