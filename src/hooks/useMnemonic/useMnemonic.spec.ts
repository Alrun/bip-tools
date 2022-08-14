import { renderHook } from '@testing-library/react-hooks';
import useMnemonic from './useMnemonic';

describe('useMnemonic hook', () => {
    it('should return empty properties if the input entropy is empty', () => {
        const { result } = renderHook(() => useMnemonic(''));

        expect(result.current).toEqual({ list: [], raw: '', checksum: '' });
    });

    it('should return mnemonic list with checksum', () => {
        const { result } = renderHook(() => useMnemonic('0485e939859486ff3ead9afa914b9046'));

        expect(result.current).toEqual({
            list: [
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
            ],
            raw:
                '0000010010000101111010010011100110000101100101001000011011111111' +
                '0011111010101101100110101111101010010001010010111001000001000110',
            checksum: '1001'
        });
    });
});
