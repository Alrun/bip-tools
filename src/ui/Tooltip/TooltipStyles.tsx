import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
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
