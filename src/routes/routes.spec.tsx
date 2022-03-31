import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '../mocks/jest/matchMedia.mock';
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

    it('should render dashboard route', () => {
        const { container, getByRole } = renderWithRouter();

        const dashboardLink = getByRole('button', { name: /dashboard/i });

        userEvent.click(dashboardLink);
        expect(container.innerHTML).not.toMatch(/table 1/i);
        expect(container.innerHTML).toMatch(/dashboard 3/i);
    });

    it('should navigate to table route', async () => {
        renderWithRouter();

        const tableLink = screen.getByRole('button', { name: /table/i });

        userEvent.click(tableLink);

        expect(screen.queryByText(/dashboard 3/i)).toBeNull();
        expect(await screen.findByText(/table 1/i)).toBeInTheDocument();
    });

    it('should navigate to error route', () => {
        renderWithRouter('/not-found');

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
