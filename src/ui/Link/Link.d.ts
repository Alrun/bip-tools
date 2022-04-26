import React from 'react';
import { LinkClasses } from '@mui/material/Link/linkClasses';
import { TypographyProps } from '@mui/material/Typography';

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
