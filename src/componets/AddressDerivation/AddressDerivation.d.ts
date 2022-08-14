import React from 'react';
import { Bip, Derivation, Script } from '../../libs/bips/bips.d';

export interface AddressDerivationProps extends Derivation {
    /**
     * Base58 string with derived extended serialized private key.
     */
    extendedDerivedPrivateKey: string;
    /**
     * Base58 string with derived extended serialized public key.
     */
    extendedDerivedPublicKey: string;
    /**
     * List of expanded panels.
     */
    expandedPanel: string[];
    /**
     * The callback is fired when the derivation path changes.
     *
     * @param {string} path Derivation path.
     */
    onChangePathDerivation: (path: string) => void;
    /**
     * The callback is fired when the BIP type changes.
     *
     * @param {Bip} bip BIP type.
     */
    onChangeBip: (bip: Bip) => void;
    /**
     * The callback is fired when the encoding script changes.
     *
     * @param {`${Script}`} script Encoding script.
     */
    onChangeScript: (script: `${Script}`) => void;
    /**
     * The callback is fired when the hardened keys changes.
     *
     * @param {boolean} hardened If 'true', the keys are hardened.
     */
    onChangeHardened: (hardened: boolean) => void;
    /**
     * Callback fired when the panel is expanded/collapsed.
     *
     * @param {string} panel Panel ID.
     */
    onExpandPanel: (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => void;
    /**
     * The callback is fired when the coin type changes.
     *
     * @param {string} coin Coin type.
     */
    onChangeCoin: (coin: string) => void;
    /**
     * If 'true', balances are shown.
     */
    showBalances: boolean;
    /**
     * The callback is fired when the show balances changes.
     *
     * @param {boolean} show If 'true, then balances are shown.
     */
    onChangeShowBalances: (show: boolean) => void;
}
