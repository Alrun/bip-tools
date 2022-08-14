import React from 'react';
import { Mnemonic } from '../../libs/bips/bips.d';

export interface AddressExtendedProps extends Mnemonic {
    /**
     * List of expanded panels.
     */
    expandedPanel: string[];
    /**
     * The callback is fired when the passphrase changes.
     *
     * @param {string} pass Passphrase value.
     */
    onChangePassphrase: (pass: string) => void;
    /**
     * The callback is fired when the seed changes.
     *
     * @param {string} seed Seed value.
     */
    onChangeSeed: (seed: string) => void;
    /**
     * Callback fired when the panel is expanded/collapsed.
     *
     * @param {string} panel Panel ID.
     */
    onExpandPanel: (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => void;
    /**
     * Base58 string with extended serialized private key.
     */
    serializedExtendedPrivateKey: string;
    /**
     * Base58 string with extended serialized public key.
     */
    serializedExtendedPublicKey: string;
}
