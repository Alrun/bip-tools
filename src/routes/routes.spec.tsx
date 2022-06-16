import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../componets/App/App';
import { store } from '../redux/store';
// import { Table } from '../componets/Main/Main';

const renderWithRouter = (initialRoute = '/') =>
    render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );

// jest.mock('Table', () => {
//     return function({ loader }) {
//         loader();
//         return function LoadableComponent() {
//             return null;
//         };
//     };
// });

describe('Routes', () => {
    // beforeAll(() => {
    //
    // });

    // it('should render dashboard route', () => {
    //     renderWithRouter();
    //
    //     const dashboardLink = screen.getByRole('button', { name: 'Dashboard' });
    //
    //     userEvent.click(dashboardLink);
    //     expect(screen.queryByText(/table 1/i)).toBeNull();
    //     expect(screen.getByText(/dashboard 3/i)).toBeInTheDocument();
    // });

    // it('should render home route', () => {
    //     const { container, getByRole } = renderWithRouter();
    //
    //     const homeLink = getByRole('button', { name: /home/i });
    //
    //     userEvent.click(homeLink);
    //     expect(container.innerHTML).not.toMatch(/mnemonic/i);
    //     expect(container.innerHTML).toMatch(/home/i);
    // });
    //
    // it('should navigate to mnemonic route', async () => {
    //     renderWithRouter();
    //
    //     const mnemonicLink = screen.getByRole('button', { name: /mnemonic/i });
    //
    //     userEvent.click(mnemonicLink);
    //
    //     expect(screen.queryByText(/home/i)).toBeNull();
    //     expect(await screen.findByText(/mnemonic/i)).toBeInTheDocument();
    // });

    it('should navigate to error route', () => {
        renderWithRouter('/not-found');

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
