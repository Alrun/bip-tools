import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import customTheme from '../../ui/Theme/Theme';
import App from '../../componets/App/App';

export const renderWithTheme = (component: React.ReactNode, mode: 'dark' | 'light' = 'light'): RenderResult => {
    const theme = customTheme(mode);

    return render(
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {component}
        </ThemeProvider>
    );
};

export const renderWithRouter = (initialRoute = '/'): RenderResult =>
    render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );
