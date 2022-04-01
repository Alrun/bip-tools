import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { useDarkMode } from 'storybook-dark-mode';
import customTheme from '../src/ui/Theme/Theme';

const withThemeProvider = (Story, context) => {
    const theme = customTheme(useDarkMode() ? 'dark' : 'light');

    return (
        <Emotion10ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <Story {...context} />
            </ThemeProvider>
        </Emotion10ThemeProvider>
    );
};

export const decorators = [withThemeProvider];
