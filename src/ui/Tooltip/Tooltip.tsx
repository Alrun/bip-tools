import React from 'react';
import { StyledTooltip } from './TooltipStyles';
import { TooltipProps } from './Tooltip.d';

const Tooltip = ({ children, ...props }: TooltipProps) => (
    <StyledTooltip disableInteractive {...props}>
        {children}
    </StyledTooltip>
);

export default Tooltip;
