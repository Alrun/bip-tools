import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { store } from '../../redux/store';
import App from './App';

it('renders mnemonic link', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByText(/bip tools/i)).toBeInTheDocument();
});
