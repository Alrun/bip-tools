import { getChecksum } from './mnemonic';

describe('generateMasterKeys', () => {
    it('should return the checksum', () => {
        const { list, raw, checksum } = getChecksum('0485e939859486ff3ead9afa914b9046');

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
