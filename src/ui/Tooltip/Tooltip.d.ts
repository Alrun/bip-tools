import React from 'react';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip/Tooltip';

export interface TooltipProps {
    /**
     * If `true`, adds an arrow to the tooltip.
     *
     * @default false
     */
    arrow?: boolean;
    /**
     * Tooltip reference element.
     */
    children: React.ReactElement<any, any>;
    /**
     * The components used for each slot inside the Tooltip.
     * Either a string to use a HTML element or a component.
     *
     * @default {}
     */
    components?: MuiTooltipProps['components'];
    /**
     * The props used for each slot inside the Tooltip.
     * Note that `componentsProps.popper` prop values win over `PopperProps`
     * and `componentsProps.transition` prop values win over `TransitionProps` if both are applied.
     *
     * @default {}
     */
    componentsProps?: MuiTooltipProps['componentsProps'];
    /**
     * Set to `true` if the `title` acts as an accessible description.
     * By default, the `title` acts as an accessible label for the child.
     *
     * @default false
     */
    describeChild?: boolean;
    /**
     * Do not respond to focus-visible events.
     *
     * @default false
     */
    disableFocusListener?: boolean;
    /**
     * Do not respond to hover events.
     *
     * @default false
     */
    disableHoverListener?: boolean;
    /**
     * Makes a tooltip not interactive, i.e. it will close when the user
     * hovers over the tooltip before the `leaveDelay` is expired.
     *
     * @default true
     */
    disableInteractive?: boolean;
    /**
     * Do not respond to long press touch events.
     *
     * @default false
     */
    disableTouchListener?: boolean;
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (`enterTouchDelay`).
     *
     * @default 100
     */
    enterDelay?: number;
    /**
     * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
     *
     * @default 0
     */
    enterNextDelay?: number;
    /**
     * The number of milliseconds a user must touch the element before showing the tooltip.
     *
     * @default 700
     */
    enterTouchDelay?: number;
    /**
     * If `true`, the tooltip follow the cursor over the wrapped element.
     *
     * @default false
     */
    followCursor?: boolean;
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id?: string;
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (`leaveTouchDelay`).
     *
     * @default 0
     */
    leaveDelay?: number;
    /**
     * The number of milliseconds after the user stops touching an element before hiding the tooltip.
     *
     * @default 1500
     */
    leaveTouchDelay?: number;
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {React.SyntheticEvent} event The event source of the callback.
     */
    onClose?: (event: React.SyntheticEvent | Event) => void;
    /**
     * Callback fired when the component requests to be open.
     *
     * @param {React.SyntheticEvent} event The event source of the callback.
     */
    onOpen?: (event: React.SyntheticEvent) => void;
    /**
     * If `true`, the component is shown.
     */
    open?: boolean;
    /**
     * Tooltip placement.
     *
     * @default 'bottom'
     */
    placement?: MuiTooltipProps['placement'];
    /**
     * The component used for the popper.
     *
     * @default Popper
     */
    PopperComponent?: MuiTooltipProps['PopperComponent'];
    /**
     * Props applied to the [`Popper`](/material-ui/api/popper/) element.
     *
     * @default {}
     */
    PopperProps?: MuiTooltipProps['PopperProps'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiTooltipProps['sx'];
    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title: NonNullable<React.ReactNode>;
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     *
     * @default Grow
     */
    TransitionComponent?: MuiTooltipProps['TransitionComponent'];
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps?: MuiTooltipProps['TransitionProps'];
}
