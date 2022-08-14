import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/test/helpers';

describe('Routes', () => {
    it('should render home route', () => {
        renderWithRouter();

        expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument();
    });

    it('should navigate to mnemonic route', () => {
        renderWithRouter();

        const mnemonicLink = screen.getByRole('button', { name: /mnemonic/i });

        userEvent.click(mnemonicLink);

        expect(screen.queryByTestId(/dashboard/i)).toBeNull();
        expect(screen.getByTestId(/mnemonic/i)).toBeInTheDocument();
    });

    it('should navigate to error route', () => {
        renderWithRouter('/not-found');

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });

    it('should navigate to homepage route', () => {
        renderWithRouter('/not-found');

        const backToHomeLink = screen.getByRole('button', { name: /back to homepage/i });

        userEvent.click(backToHomeLink);

        expect(screen.queryByText(/404/i)).toBeNull();
        expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument();
    });
});
