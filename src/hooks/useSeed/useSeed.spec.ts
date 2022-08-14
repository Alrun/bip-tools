import { renderHook } from '@testing-library/react-hooks';
import useSeed from './useSeed';

const MNEMONIC = 'afraid consider example arctic embody legend wide rebuild whisper medal tomato minute';
const PASSWORD = 'test passphrase';
const SEED =
    'c2a939ac9881088eccf13774af5145a864bbfa66e9a46b51b80cc1a9c0ce3b08' +
    '8773eb347bf34840fe162c992fe866f06eccacb500ff75322c46fed75438dee0';
const SEED_WITH_PASSWORD =
    'ad238a657ec3a1e41b9946a43a9a7cad8c2d94dafb345cd1a0bfb1caf3e7e2cc' +
    'e80247b9e0190d3b56a13d32d240c281ed371312e6f37919365b816dd62305c0';

describe('useSeed hook', () => {
    it('should return an empty string if the input mnemonic is empty', () => {
        const { result } = renderHook(() => useSeed(''));

        expect(result.current).toBe('');
    });

    it('should return an empty string if the input mnemonic is empty even if there is a password passed', () => {
        const { result } = renderHook(() => useSeed('', PASSWORD));

        expect(result.current).toBe('');
    });

    it('should return the seed from the passed mnemonic', () => {
        const { result } = renderHook(() => useSeed(MNEMONIC));

        expect(result.current).toBe(SEED);
    });

    it('should return a password-encoded seed', () => {
        const { result } = renderHook(() => useSeed(MNEMONIC, PASSWORD));

        expect(result.current).toBe(SEED_WITH_PASSWORD);
    });
});
