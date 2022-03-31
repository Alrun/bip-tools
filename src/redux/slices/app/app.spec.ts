import appReducer, { AppState, drawerDenseToggle, setMode } from './app';

describe('appSession reducer', () => {
    const initialState: AppState = {
        locale: 'en',
        mode: 'auto',
        drawerDense: false,
        sidebarExpanded: false,
    };

    it('should return the initial state', () => {
        expect(appReducer(undefined, { type: 'unknown' })).toEqual({
            locale: 'en',
            mode: 'auto',
            drawerDense: false,
            sidebarExpanded: false,
        });
    });

    it('should handle change theme mode', () => {
        const actual = appReducer(initialState, setMode('light'));

        expect(actual.mode).toBe('light');
    });

    it('should handle set sidebar dense', () => {
        const actual = appReducer(initialState, drawerDenseToggle(false));

        expect(actual.drawerDense).toBeFalsy();
    });
});
