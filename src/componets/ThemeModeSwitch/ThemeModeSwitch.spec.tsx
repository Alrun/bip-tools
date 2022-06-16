import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeModeSwitch from './ThemeModeSwitch';
import { renderWithTheme } from '../../utils/test/helpers';

describe('theme mode switch', () => {
    it('should render a button', () => {
        render(<ThemeModeSwitch mode="light" />);

        expect(screen.getByRole('button', { name: /auto/i })).toBeInTheDocument();
    });

    it('should show hidden buttons', async () => {
        render(<ThemeModeSwitch mode="light" />);

        const buttonAuto = screen.getByRole('button', { name: /auto/i });

        userEvent.hover(buttonAuto);

        expect(screen.getByRole('button', { name: /dark/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /light/i })).toBeInTheDocument();

        userEvent.unhover(buttonAuto);

        await waitForElementToBeRemoved(() => screen.queryByRole('button', { name: /dark/i }));
    });

    it('should render tooltip', async () => {
        const autoText = 'System';
        const darkText = 'Dark';
        const lightText = 'Light';

        render(<ThemeModeSwitch mode="light" />);
        // Tooltip button auto.
        const buttonAuto = screen.getByRole('button', { name: /auto/i });

        userEvent.hover(buttonAuto);

        await waitFor(() => expect(screen.getByText(autoText)).toBeInTheDocument());

        userEvent.unhover(buttonAuto);

        await waitForElementToBeRemoved(() => screen.getByText(autoText));
        // Tooltip button dark.
        const buttonDark = screen.getByRole('button', { name: /dark/i });

        userEvent.hover(buttonDark);

        await waitFor(() => expect(screen.getByText(darkText)).toBeInTheDocument());

        userEvent.unhover(buttonDark);

        await waitForElementToBeRemoved(() => screen.getByText(darkText));
        // Tooltip button light.
        const buttonLight = screen.getByRole('button', { name: /light/i });

        userEvent.hover(buttonLight);

        await waitFor(() => expect(screen.getByText(lightText)).toBeInTheDocument());

        userEvent.unhover(buttonLight);

        await waitForElementToBeRemoved(() => screen.getByText(lightText));
    });

    it('should show hidden buttons', () => {
        render(<ThemeModeSwitch mode="light" expanded />);

        expect(screen.getByRole('button', { name: /dark/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /light/i })).toBeInTheDocument();
    });

    it('should show all buttons', () => {
        renderWithTheme(<ThemeModeSwitch mode="dark" expanded />, 'dark');

        expect(screen.getByRole('button', { name: /auto/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /dark/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /light/i })).toBeInTheDocument();
    });
});
