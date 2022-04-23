import React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';
import { LinkClasses } from '@mui/material/Link/linkClasses';
import { LinkProps as MuiLinkProps } from '@mui/material/Link/link';
import { TypographyProps } from '@mui/material/Typography';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export type LinkProps = LinkProps & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<LinkClasses>;
    /**
     * The color of the link.
     * @default 'primary'
     */
    color?: TypographyProps['color'];
    /**
     * If `true`, an external icon is added at the end.
     */
    external?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * `classes` prop applied to the [`Typography`](/api/typography/) element.
     */
    TypographyClasses?: TypographyProps['classes'];
    /**
     * Controls when the link should have an underline.
     * @default 'always'
     */
    underline?: 'none' | 'hover' | 'always';
    /**
     * Applies the theme typography styles.
     * @default 'inherit'
     */
    variant?: TypographyProps['variant'];
}
