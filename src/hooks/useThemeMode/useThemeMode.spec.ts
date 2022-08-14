import { renderHook } from '@testing-library/react-hooks';
import useThemeMode, { reducer } from './useThemeMode';
import { ThemeMode } from '../../componets/ThemeModeSwitch/ThemeModeSwitch.d';

describe('useThemeMode reducer', () => {
    const initialState: ThemeMode = 'auto';

    it('should handle switching to dark theme', () => {
        expect(reducer(initialState, { type: 'dark' })).toBe('dark');
    });

    it('should handle switching to light theme', () => {
        expect(reducer(initialState, { type: 'light' })).toBe('light');
    });

    it('should handle switching to auto theme', () => {
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
