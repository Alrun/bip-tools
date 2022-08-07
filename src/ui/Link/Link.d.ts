import React from 'react';
import { TypographyProps } from '@mui/material/Typography';

export type LinkProps = LinkProps & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * The color of the link.
     *
     * @default 'primary'
     */
    color?: TypographyProps['color'];
    /**
     * If `true`, an external icon is added at the end.
     * Also add external icon if `external` property is `true`.
     */
    external?: boolean;
    /**
     * Controls when the link should have an underline.
     *
     * @default 'always'
     */
    underline?: 'none' | 'hover' | 'always';
    /**
     * Applies the theme typography styles.
     *
     * @default 'inherit'
     */
    variant?: TypographyProps['variant'];
}
