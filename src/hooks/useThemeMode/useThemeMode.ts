import React from 'react';
import { detectColorScheme } from '../../utils/featuresDetection/featuresDetection';
import { ThemeModeType } from '../../componets/ThemeModeSwitch/ThemeModeSwitch.d';

type Mode = Exclude<ThemeModeType, 'auto'>;

const init = (initialMode: ThemeModeType): Mode => (initialMode === 'auto' ? detectColorScheme() : initialMode);

export const reducer = (state: ThemeModeType, action: { type: ThemeModeType }): Mode => {
    switch (action.type) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default:
            return init('auto');
    }
};

const useThemeMode = (mode: ThemeModeType): Mode => {
    const [colorScheme, dispatch] = React.useReducer(reducer, mode, init);

    React.useEffect(() => {
        dispatch({ type: mode });
    }, [mode]);

    return colorScheme;
};

export default useThemeMode;
