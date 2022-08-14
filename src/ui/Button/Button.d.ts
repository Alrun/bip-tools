import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

export interface ButtonProps
    extends Omit<
        MuiButtonProps,
        'action' | 'classes' | 'disableElevation' | 'focusVisibleClassName' | 'touchRippleRef' | 'TouchRippleProps'
    > {
    /**
     * If 'true', renders loading button.
     */
    async?: boolean;
    /**
     * If 'true', the component is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If 'true', the button will be round.
     *
     * @default false
     */
    isRound?: boolean;
    /**
     * If 'true', the loading indicator is shown.
     */
    loading?: boolean;
    /**
     * Callback fired when the button is clicked.
     *
     * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
     * @param {any} value of the selected button.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
