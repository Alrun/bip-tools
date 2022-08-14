import appReducer, { setMode, setSidebarDense, setMenuExpanded } from './app';
import { AppState } from './app.d';

describe('app reducer', () => {
    const initialState: AppState = {
        locale: 'en',
        mode: 'auto',
        sidebarDense: false,
        menuExpanded: false
    };

    it('should return the initial state', () => {
        expect(appReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle change theme mode', () => {
        const actual = appReducer(initialState, setMode('light'));

        expect(actual.mode).toBe('light');
    });

    it('should handle set sidebar dense', () => {
        const actual = appReducer(initialState, setSidebarDense(false));

        expect(actual.sidebarDense).toBeFalsy();
    });

    it('should handle set sidebar dense', () => {
        const actual = appReducer(initialState, setMenuExpanded(false));

        expect(actual.menuExpanded).toBeFalsy();
    });
});
