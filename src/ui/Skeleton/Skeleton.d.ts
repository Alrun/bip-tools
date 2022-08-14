import React from 'react';
import { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps {
    /**
     * The animation.
     * If `false` the animation effect is disabled.
     *
     * @default 'wave'
     */
    animation?: 'pulse' | 'wave' | false;
    /**
     * Optional children to infer width and height from.
     */
    children?: React.ReactNode;
    /**
     * Height of the skeleton.
     * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
     */
    height?: number | string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiSkeletonProps['sx'];
    /**
     * The type of content that will be rendered.
     *
     * @default 'default'
     */
    variant?: 'default' | 'text' | 'rectangular' | 'circular';
    /**
     * Width of the skeleton.
     * Useful when the skeleton is inside an inline element with no width of its own.
     */
    width?: number | string;
}
