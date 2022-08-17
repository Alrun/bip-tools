import { extractEntropy, getIndex, getMnemonicList, getWord } from './mnemonic';

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

    describe('extractEntropy', () => {
        it('should extract entropy for 12 words', () => {
            expect(extractEntropy([...Array(11).fill('zoo'), 'wrong'])).toEqual({
                binEntropy: '1'.repeat(128),
                hexEntropy: 'f'.repeat(32),
                rawBinList: [...Array(11).fill('11111111111'), '11111110101']
            });
        });

        it('should extract entropy for 15 words', () => {
            expect(extractEntropy([...Array(14).fill('zoo'), 'wrist'])).toEqual({
                binEntropy: '1'.repeat(160),
                hexEntropy: 'f'.repeat(40),
                rawBinList: [...Array(14).fill('11111111111'), '11111110011']
            });
        });

        it('should extract entropy for 17 words', () => {
            expect(extractEntropy([...Array(17).fill('zoo'), 'when'])).toEqual({
                binEntropy: '1'.repeat(192),
                hexEntropy: 'f'.repeat(48),
                rawBinList: [...Array(17).fill('11111111111'), '11111010001']
            });
        });

        it('should extract entropy for 21 words', () => {
            expect(extractEntropy([...Array(20).fill('zoo'), 'veteran'])).toEqual({
                binEntropy: '1'.repeat(224),
                hexEntropy: 'f'.repeat(56),
                rawBinList: [...Array(20).fill('11111111111'), '11110011001']
            });
        });

        it('should extract entropy for 24 words', () => {
            expect(extractEntropy([...Array(23).fill('zoo'), 'vote'])).toEqual({
                binEntropy: '1'.repeat(256),
                hexEntropy: 'f'.repeat(64),
                rawBinList: [...Array(23).fill('11111111111'), '11110101111']
            });
        });
    });
});
