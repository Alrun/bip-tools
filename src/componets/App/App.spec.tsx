import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { store } from '../../redux/store';
import App from './App';

it('should render App', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );

    expect(screen.getAllByText(/bip tools/i)).toHaveLength(2);
});
