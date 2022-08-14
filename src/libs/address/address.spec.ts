import { getAddress, getAddressKeys } from './address';
import { Script } from '../bips/bips.d';

const PRIVATE_KEY = '39f329fedba2a68e2a804fcd9aeea4104ace9080212a52ce8b52c1fb89850c72';
const PUBLIC_KEY = '030204d3503024160e8303c0042930ea92a9d671de9aa139c1867353f6b6664e59';
const ADDRESS_BIP32 = '1Ein9VbupgUa3pJ4tao3XjhhSpzV1dYm9R';

const SCRIPT = {
    P2PKH: Script.P2PKH,
    P2WPKHP2SH: Script.P2WPKHP2SH,
    P2WPKH: Script.P2WPKH
};

const COIN = {
    BITCOIN: '0',
    ETHEREUM: '60'
};

describe('address', () => {
    describe('getAddress', () => {
        it('should derive the address for P2PKH script', () => {
            const address = getAddress(PUBLIC_KEY);

            expect(address).toBe(ADDRESS_BIP32);
        });

        it('should derive the address for P2WPKH-P2SH script', () => {
            const address = getAddress(PUBLIC_KEY, SCRIPT.P2WPKHP2SH);

            expect(address).toBe('33AD9CF1GFrDie4E4Nou2YEDNpF9XUJDR5');
        });

        it('should derive the address for P2WPKH script', () => {
            const address = getAddress(PUBLIC_KEY, SCRIPT.P2WPKH);

            expect(address).toBe('bc1qj6qxq0mzhfd65778m76k88chjp54jvtvv5zn7s');
        });
    });

    describe('getAddressKeys', () => {
        it('should derive the address, private and public key for Bitcoin', () => {
            const { address, publicKey, privateKey } = getAddressKeys(PRIVATE_KEY);

            expect(address).toBe(ADDRESS_BIP32);
            expect(publicKey).toBe(PUBLIC_KEY);
            expect(privateKey).toBe('KyAMi1h92kujoMHJCv4YNBgRVRdedCLESzjRzS1RELUcPTF7hYx2');
        });

        it('should derive the address, private and public key for Ethereum', () => {
            const { address, publicKey, privateKey } = getAddressKeys(
                PRIVATE_KEY,
                undefined,
                SCRIPT.P2PKH,
                COIN.ETHEREUM
            );

            expect(address).toBe('0xd57516d314e70054590b5c9e865ab167cad857e7');
            expect(publicKey).toBe(`0x${PUBLIC_KEY}`);
            expect(privateKey).toBe(`0x${PRIVATE_KEY}`);
        });
    });
});
