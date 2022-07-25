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

export type BipType = 'bip32' | 'bip44' | 'bip49' | 'bip84';
