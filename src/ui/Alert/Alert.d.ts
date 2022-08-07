import React from 'react';
import { AlertProps as MuiAlertProps } from '@mui/material/Alert/Alert';

export interface AlertProps {
    /**
     * The action to display. It renders after the message, at the end of the alert.
     */
    action?: React.ReactNode;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override the default label for the *close popup* icon button.
     * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
     *
     * @default 'Close'
     */
    closeText?: string;
    /**
     * Override the icon displayed before the children.
     * Unless provided, the icon is mapped to the value of the `severity` prop.
     * Set to `false` to remove the `icon`.
     */
    icon?: React.ReactNode | false;
    /**
     * The component maps the `severity` prop to a range of different icons, for instance success to `<SuccessOutlined>`.
     * If you wish to change this mapping, you can provide your own.
     * Alternatively, you can use the `icon` prop to override the icon displayed.
     */
    iconMapping?: MuiAlertProps['iconMapping'];
    /**
     * Callback fired when the component requests to be closed.
     * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
     *
     * @param {React.SyntheticEvent} event The event source of the callback.
     */
    onClose?: (event: React.SyntheticEvent) => void;
    /**
     * The ARIA role attribute of the element.
     *
     * @default 'alert'
     */
    role?: string;
    /**
     * The severity of the alert. This defines the color and icon used.
     *
     * @default 'success'
     */
    severity?: MuiAlertProps['severity'];
    /**
     * The variant to use.
     *
     * @default 'standard'
     */
    variant?: MuiAlertProps['variant'];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiAlertProps['sx'];
}
