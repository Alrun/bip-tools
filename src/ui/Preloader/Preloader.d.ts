import { CircularProgressProps } from '@mui/material/CircularProgress';

export interface PreloaderProps {
    /**
     * The variant to use.
     * Use indeterminate when there is no progress value.
     *
     * @default 'indeterminate'
     */
    circularVariant?: 'determinate' | 'indeterminate';
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
     *
     * @default 'primary'
     */
    color?: CircularProgressProps['color']
    /**
     * If `true`, the shrink animation is disabled.
     * This only works if variant is `indeterminate`.
     *
     * @default true
     */
    disableShrink?: boolean;
    /**
     * Changes the circular preloader to a linear one.
     *
     * @default false
     */
    isLinear?: boolean;
    /**
     * Linear progress height.
     *
     * @default 4
     */
    height?: number
    /**
     * The variant linear to use.
     * Use indeterminate or query when there is no progress value.
     *
     * @default 'indeterminate'
     */
    linearVariant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    /**
     * The size of the component.
     * If using a number, the pixel unit is assumed.
     * If using a string, you need to provide the CSS unit, e.g '3rem'.
     *
     * @default 28
     */
    size?: number | string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: CircularProgressProps['sx'];
    /**
     * The thickness of the circle.
     *
     * @default 3.6
     */
    thickness?: number;
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     *
     * @default 0
     */
    value?: number;
    /**
     * The value of the linear for the buffer variant.
     * Value between 0 and 100.
     */
    valueBuffer?: number;
}
