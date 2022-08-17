import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

// eslint-disable-next-line import/prefer-default-export
export const StyledTooltip = styled(({ className, children, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }}>
        {children}
    </Tooltip>
))({
    [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
        top: 0.5
    },
    [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
        bottom: 0.5
    },
    [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        right: 0.5
    },
    [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        left: 0.5
    },
    [`& .${tooltipClasses.tooltip}`]: {}
});
