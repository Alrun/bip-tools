import React from 'react';
import { detectColorScheme } from '../../utils/featuresDetection/featuresDetection';
import { ThemeMode } from '../../componets/ThemeModeSwitch/ThemeModeSwitch.d';

type Mode = Exclude<ThemeMode, 'auto'>;

const init = (initialMode: ThemeMode): Mode => (initialMode === 'auto' ? detectColorScheme() : initialMode);

export const reducer = (state: ThemeMode, action: { type: ThemeMode }): Mode => {
    switch (action.type) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default:
            return init('auto');
    }
};

const useThemeMode = (mode: ThemeMode): Mode => {
    const [colorScheme, dispatch] = React.useReducer(reducer, mode, init);

    React.useEffect(() => {
        dispatch({ type: mode });
    }, [mode]);

    return colorScheme;
};

export default useThemeMode;
