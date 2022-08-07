import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import customTheme from '../../ui/Theme/Theme';
import { setMode } from '../../redux/slices/app/app';
import useThemeMode from '../../hooks/useThemeMode/useThemeMode';
import Layout from '../Layout/Layout';
import { ThemeModeType } from '../ThemeModeSwitch/ThemeModeSwitch.d';

const App = () => {
    const { mode } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const colorScheme = useThemeMode(mode);

    const theme = React.useMemo(() => customTheme(colorScheme), [colorScheme]);

    const handleChangeMode = React.useCallback((nextMode: ThemeModeType) => dispatch(setMode(nextMode)), [colorScheme]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Layout mode={mode} changeMode={handleChangeMode} />
        </ThemeProvider>
    );
};

export default App;
