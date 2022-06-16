import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../../ui/Theme/Theme';
// eslint-disable-next-line import/prefer-default-export
export const renderWithTheme = (component: React.ReactNode, mode: 'dark' | 'light' = 'light'): RenderResult => {
    const theme = customTheme(mode);

    return render(
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {component}
        </ThemeProvider>
    );
};
