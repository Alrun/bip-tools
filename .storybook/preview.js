import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import customTheme from '../src/ui/Theme/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const theme = customTheme('light'); // or your custom theme

const withThemeProvider = (Story, context) => {
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

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
};
