import { renderHook } from '@testing-library/react-hooks';
import { ThemeModeType } from '../../componets/ThemeModeSwitch/ThemeModeSwitch.d';
import useThemeMode, { reducer } from './useThemeMode';

describe('useThemeMode reducer', () => {
    const initialState: ThemeModeType = 'auto';

    it('should handle increment', () => {
        expect(reducer(initialState, { type: 'dark' })).toBe('dark');
    });

    it('should handle increment', () => {
        expect(reducer(initialState, { type: 'light' })).toBe('light');
    });

    it('should handle increment', () => {
        expect(reducer(initialState, { type: 'auto' })).toBe('light');
    });
});

describe('useThemeMode hook', () => {
    it('should provide a default theme', () => {
        const { result } = renderHook(() => useThemeMode('auto'));

        expect(result.current).toBe('light');
    });

    it('should update theme mode', () => {
        const { result } = renderHook(() => useThemeMode('light'));

        expect(result.current).toBe('light');
    });
});
