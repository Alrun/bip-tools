import React from 'react';
import { TooltipProps } from './Tooltip.d';
import { StyledTooltip } from './TooltipStyles';

const Tooltip = ({ children, ...props }: TooltipProps) => (
    <StyledTooltip disableInteractive {...props}>
        {children}
    </StyledTooltip>
);

export default Tooltip;
