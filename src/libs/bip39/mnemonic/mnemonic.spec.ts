import { getIndex, getMnemonicList, getWord } from './mnemonic';

describe('BIP39 mnemonic', () => {
    describe('getMnemonicList', () => {
        it('should return empty properties if the input entropy is empty', () => {
            const { list, raw, checksum } = getMnemonicList('');

            expect(list).toEqual([]);
            expect(raw).toBe('');
            expect(checksum).toBe('');
        });

        it('should return mnemonic list without checksum', () => {
            const { list, raw, checksum } = getMnemonicList('0485e939859486ff3ead9a');

            expect(list).toEqual([
                '00000100100',
                '00101111010',
                '01001110011',
                '00001011001',
                '01001000011',
                '01111111100',
                '11111010101',
                '10110011010'
            ]);

            expect(raw).toBe(
                '0000010010000101111010010011100110000101100101001000011011111111001111101010110110011010'
            );

            expect(checksum).toBe('');
        });

        it('should return mnemonic list with checksum', () => {
            const { list, raw, checksum } = getMnemonicList('0485e939859486ff3ead9afa914b9046');

            expect(list).toEqual([
                '00000100100',
                '00101111010',
                '01001110011',
                '00001011001',
                '01001000011',
                '01111111100',
                '11111010101',
                '10110011010',
                '11111010100',
                '10001010010',
                '11100100000',
                '10001101010'
            ]);

            expect(raw).toBe(
                '0000010010000101111010010011100110000101100101001000011011111' +
                    '1110011111010101101100110101111101010010001010010111001000001000110'
            );

            expect(checksum).toBe('1001');
        });
    });

    describe('getIndex', () => {
        it('should return index', () => {
            expect(getIndex('00000100100')).toBe(36);
        });
    });

    describe('getWord', () => {
        it('should return word', () => {
            expect(getWord('00000100100')).toBe('afraid');
        });
    });
});
