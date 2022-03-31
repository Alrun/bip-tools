import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../../ui/Theme/Theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMode, ThemeModeType } from '../../redux/slices/app/app';
import Layout from '../Layout/Layout';

/**
 * Detect browser color scheme
 */
export const detectColorScheme = (): ThemeModeType => {
    if (!window.matchMedia) return 'light';

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
};

const App = () => {
    const { mode } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();
    const defineColorScheme = () => (mode === 'auto' ? detectColorScheme() : mode);
    const [colorScheme, setColorScheme] = React.useState<ThemeModeType>(() => defineColorScheme());
    const theme = React.useMemo(() => customTheme(colorScheme), [colorScheme]);

    const handleChangeMode = React.useMemo(
        () => () => {
            const nextMode = colorScheme === 'light' ? 'dark' : 'light';

            setColorScheme(nextMode);
            dispatch(setMode(nextMode));
        },
        [colorScheme]
    );

    // TODO: Remove after render check
    const rendersCount = React.useRef<number>(0);

    // React.useEffect(() => {
    //     (async () => {
    //         const response = await fetch("/api/get-some-cars");
    //         const json = await response.json();
    //         console.log(json);
    //     })();
    // }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Layout mode={colorScheme} handleChangeMode={handleChangeMode} />
            {/* TODO: Remove after render check */}
            <b style={{ position: 'absolute', bottom: 30, right: 10 }}>
                {/* eslint-disable-next-line no-plusplus */}
                App RENDER COUNT: {++rendersCount.current}
            </b>
        </ThemeProvider>
    );
};

export default App;
