export interface ButtonQrCodeProps {
    /**
     * The icon inside the qr code.
     */
    icon?: string;
    /**
     * The text content of the component.
     */
    text: string;
    /**
     * Title of the modal.
     */
    title: string;
    /**
     * Tooltip text.
     *
     * @default 'QR code'
     */
    tooltipText?: string;
}
