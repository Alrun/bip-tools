import React from 'react';
import { DialogProps } from '@mui/material/Dialog/Dialog';

export interface ModalProps {
    /**
     * The direction of the animation when the modal is shown.
     */
    slide?: 'up' | 'down' | 'left' | 'right' | false;
    /**
     * ID used as a prefix for the current modal.
     */
    idPrefix: string;
    /**
     * The title text of the modal.
     */
    title?: string;
    /**
     * Display the footer of the modal.
     */
    footer?: React.ReactNode;
    /**
     * Props applied to the header component.
     */
    HeaderProps?: {
        /**
         * The content of the component.
         */
        children?: React.Node;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         * */
        sx?: DialogProps['sx'];
    };
    /**
     * The id(s) of the element(s) that describe the modal.
     */
    'aria-describedby'?: string;
    /**
     * The id(s) of the element(s) that label the modal.
     */
    'aria-labelledby'?: string;
    /**
     * Modal children, usually the included subcomponents.
     */
    children?: React.ReactNode;
    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     *
     * @default false
     */
    disableEscapeKeyDown?: boolean;
    /**
     * If `true`, the modal is full-screen.
     *
     * @default false
     */
    fullScreen?: boolean;
    /**
     * If `true`, the modal stretches to `maxWidth`.
     * Notice that the modal width grow is limited by the default margin.
     *
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Determine the max-width of the modal. The modal width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     *
     * @default 'sm'
     */
    maxWidth?: DialogProps['maxWidth'];
    /**
     * Callback fired when the backdrop is clicked.
     *
     * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
     */
    onBackdropClick?: DialogProps['onBackdropClick'];
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: () => void;
    /**
     * If `true`, the component is shown.
     */
    open: DialogProps['open'];
    /**
     * The component used to render the body of the modal.
     *
     * @default Paper
     */
    PaperComponent?: DialogProps['PaperComponent'];
    /**
     * Props applied to the [`Paper`](/material-ui/api/paper/) element.
     *
     * @default {}
     */
    PaperProps?: DialogProps['PaperProps'];
    /**
     * Determine the container for scrolling the modal.
     *
     * @default 'paper'
     */
    scroll?: 'body' | 'paper';
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: DialogProps['sx'];
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     *
     * @default Fade
     */
    TransitionComponent?: DialogProps['TransitionComponent'];
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration?: DialogProps['transitionDuration'];
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps?: DialogProps['TransitionProps'];
}
