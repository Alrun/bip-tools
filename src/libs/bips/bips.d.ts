export enum Bips {
    Bip32 = 'm',
    Bip44 = "m/44'",
    Bip49 = "m/49'",
    Bip84 = "m/84'"
}

export enum Script {
    P2PKH = 'P2PKH',
    P2WPKHP2SH = 'P2WPKH-P2SH',
    P2WPKH = 'P2WPKH'
}

export type Bip = 'bip32' | 'bip44' | 'bip49' | 'bip84';

export interface WordList {
    /**
     * Element index.
     */
    id: number;
    /**
     * Word representation in binary.
     */
    wordBinary: string;
    /**
     * Word index representation in decimal system.
     */
    wordIndex: string;
    /**
     * Representation of a word in a wordlist.
     */
    wordString: string;
}

export interface Derivation {
    /**
     * Bip type.
     */
    bip: Bip;
    /**
     * Coin type. '0' - Bitcoin, '60' - Ethereum.
     */
    coinType: string;
    /**
     * Derivation path.
     */
    derivationPath: string;
    /**
     * If 'true', the child keys are hardened.
     */
    isHardened: boolean;
    /**
     * Script used for encoding.
     */
    script: `${Script}`;
}

export interface Mnemonic {
    /**
     * Randomness in hexadecimal format.
     */
    entropy: string;
    /**
     * 64-bit hex string.
     */
    seed: string;
    /**
     * Optional passphrase.
     */
    passphrase: string;
}
