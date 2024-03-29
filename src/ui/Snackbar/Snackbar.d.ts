import React from 'react';
import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar/Snackbar';
import { AlertProps } from '../Alert/Alert.d';

export interface SnackbarProps {
    /**
     * Props applied to the [`Alert`](/?path=/story/ui-alert--base) component.
     */
    AlertProps?: AlertProps;
    /**
     * The action to display. It renders after the message, at the end of the snackbar.
     */
    action?: MuiSnackbarProps['action'];
    /**
     * The anchor of the `Snackbar`.
     * On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.
     *
     * @default { vertical: 'bottom', horizontal: 'center' }
     */
    anchorOrigin?: MuiSnackbarProps['anchorOrigin'];
    /**
     * The number of milliseconds to wait before automatically calling the `onClose` function.
     * `onClose` should then set the state of the `open` prop to hide the Snackbar.
     * This behavior is disabled by default with the `null` value.
     *
     * @default 1500
     */
    autoHideDuration?: number | null;
    /**
     * Replace the `SnackbarContent` component.
     */
    children?: React.ReactElement<any, any>;
    /**
     * Props applied to the `ClickAwayListener` element.
     */
    ClickAwayListenerProps?: MuiSnackbarProps['ClickAwayListenerProps'];
    /**
     * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
     */
    ContentProps?: MuiSnackbarProps['ContentProps'];
    /**
     * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
     *
     * @default false
     */
    disableWindowBlurListener?: boolean;
    /**
     * When displaying multiple consecutive Snackbars from a parent rendering a single
     * `<Snackbar/>`, add the key prop to ensure independent treatment of each message.
     * e.g. `<Snackbar key={message} />`, otherwise, the message may update-in-place and
     * features such as autoHideDuration may be canceled.
     */
    key?: any;
    /**
     * The message to display.
     */
    message?: MuiSnackbarProps['message'];
    /**
     * Callback fired when the component requests to be closed.
     * Typically, `onClose` is used to set state in the parent component,
     * which is used to control the `Snackbar` `open` prop.
     * The `reason` parameter can optionally be used to control the response to `onClose`,
     * for example ignoring `clickaway`.
     *
     * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
     * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
     */
    onClose?: MuiSnackbarProps['onClose'];
    /**
     * If `true`, the component is shown.
     */
    open?: boolean;
    /**
     * The number of milliseconds to wait before dismissing after user interaction.
     * If `autoHideDuration` prop isn't specified, it does nothing.
     * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't, we default to `autoHideDuration / 2` ms.
     */
    resumeHideDuration?: number;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiSnackbarProps['sx'];
    /**
     * The component used for the transition.
     * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     *
     * @default `Slide`
     */
    TransitionComponent?: MuiSnackbarProps['TransitionComponent'];
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration?: MuiSnackbarProps['transitionDuration'];
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     *
     * @default {}
     */
    TransitionProps?: MuiSnackbarProps['TransitionProps'];
}
