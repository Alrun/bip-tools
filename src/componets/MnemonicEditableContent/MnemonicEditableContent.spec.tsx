import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import MnemonicEditableContent from './MnemonicEditableContent';

describe('mnemonic editable content', () => {
    const words = ['zoo', 'abandon', 'zoo', 'abandon'];

    it('should render a button', () => {
        renderWithTheme(<MnemonicEditableContent words={words} onChange={() => {}} />);

        expect(screen.getByRole('textbox', { name: /Enter your phrase/i })).toBeInTheDocument();
    });
});
