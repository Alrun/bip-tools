import { ButtonProps } from '../../ui/Button/Button';
import { TooltipProps } from '../../ui/Tooltip/Tooltip'

export interface ButtonCopyProps {
    text: string;
    tooltipText?: string;
    snackText?: string;
    ButtonProps?: ButtonProps;
    TooltipProps?: TooltipProps
}
