import { ButtonProps } from '../../ui/Button/Button';
import { TooltipProps } from '../../ui/Tooltip/Tooltip'

export interface ButtonCopyProps {
    /**
     * Props applied to the Button component.
     */
    ButtonProps?: ButtonProps;
    /**
     * The text content of the Snackbar component.
     *
     * @default 'Copied to clipboard!'
     */
    snackText?: string;
    /**
     * The text content of the component.
     */
    text: string;
    /**
     * Tooltip text.
     *
     * @default 'Copy'
     */
    tooltipText?: string;
    /**
     * Props applied to the Tooltip component.
     */
    TooltipProps?: TooltipProps
}
