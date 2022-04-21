import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

export interface ButtonProps
    extends Omit<
        MuiButtonProps,
        | 'onFocusVisible'
        | 'action'
        | 'disableElevation'
        | 'focusVisibleClassName'
        | 'touchRippleRef'
        | 'TouchRippleProps'
    > {
    /**
     * If `true`, the button will be round.
     * @default false
     */
    isRound?: boolean;
}
