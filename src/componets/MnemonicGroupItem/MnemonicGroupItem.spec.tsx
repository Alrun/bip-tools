import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../utils/test/helpers';
import MnemonicGroupItem from './MnemonicGroupItem';

describe('mnemonic group item', () => {
    beforeEach(() => {
        renderWithTheme(
            <MnemonicGroupItem id={1} wordBinary="00000000000" wordIndex="0" wordString="abandon" onChange={() => {}} />
        );
    });

    it('should render a group of inputs', () => {
        const inputBinary: HTMLInputElement = screen.getByLabelText(/binary/i);
        const inputIndex: HTMLInputElement = screen.getByLabelText(/index/i);
        const inputWord: HTMLInputElement = screen.getByLabelText(/word/i);

        expect(inputBinary).toBeInTheDocument();
        expect(inputIndex).toBeInTheDocument();
        expect(inputWord).toBeInTheDocument();

        expect(inputBinary.value).toBe('00000000000');
        expect(inputIndex.value).toBe('0');
        expect(inputWord.value).toBe('abandon');
    });

    it('should be padded with zeros if not enough length', () => {
        const inputBinary: HTMLInputElement = screen.getByLabelText(/binary/i);

        fireEvent.change(inputBinary, { target: { value: '' } });
        fireEvent.blur(inputBinary);

        expect(inputBinary.value).toBe('00000000000');

        fireEvent.change(inputBinary, { target: { value: '0101' } });
        fireEvent.blur(inputBinary);

        expect(inputBinary.value).toBe('00000000101');
    });

    it('should change inputs if the binary input has changed', () => {
        const inputBinary: HTMLInputElement = screen.getByLabelText(/binary/i);
        const inputIndex: HTMLInputElement = screen.getByLabelText(/index/i);
        const inputWord: HTMLInputElement = screen.getByLabelText(/word/i);

        fireEvent.change(inputBinary, { target: { value: '00000100000' } });

        expect(inputBinary.value).toBe('00000100000');
        expect(inputIndex.value).toBe('32');
        expect(inputWord.value).toBe('advice');

        fireEvent.change(inputBinary, { target: { value: '11111111111' } });

        expect(inputBinary.value).toBe('11111111111');
        expect(inputIndex.value).toBe('2047');
        expect(inputWord.value).toBe('zoo');
    });

    it('should change inputs if the index input has changed', () => {
        const inputBinary: HTMLInputElement = screen.getByLabelText(/binary/i);
        const inputIndex: HTMLInputElement = screen.getByLabelText(/index/i);
        const inputWord: HTMLInputElement = screen.getByLabelText(/word/i);

        fireEvent.change(inputIndex, { target: { value: '32' } });

        expect(inputBinary.value).toBe('00000100000');
        expect(inputIndex.value).toBe('32');
        expect(inputWord.value).toBe('advice');

        fireEvent.change(inputIndex, { target: { value: '' } });

        expect(inputBinary.value).toBe('00000000000');
        expect(inputIndex.value).toBe('0');
        expect(inputWord.value).toBe('abandon');

        fireEvent.change(inputIndex, { target: { value: '3000' } });

        expect(inputBinary.value).toBe('11111111111');
        expect(inputIndex.value).toBe('2047');
        expect(inputWord.value).toBe('zoo');
    });

    it('should change inputs if the word has changed', () => {
        const inputBinary: HTMLInputElement = screen.getByLabelText(/binary/i);
        const inputIndex: HTMLInputElement = screen.getByLabelText(/index/i);
        const inputWord: HTMLInputElement = screen.getByLabelText(/word/i);

        userEvent.type(inputWord, 'zoo');
        userEvent.click(screen.getByRole('option', { name: /zoo/i }));

        expect(inputBinary.value).toBe('11111111111');
        expect(inputIndex.value).toBe('2047');
        expect(inputWord.value).toBe('zoo');

        userEvent.type(inputWord, '1');
        userEvent.click(inputBinary);

        expect(inputBinary.value).toBe('11111111111');
        expect(inputIndex.value).toBe('2047');
        expect(inputWord.value).toBe('zoo');

        userEvent.type(inputWord, 'abandon');
        userEvent.click(screen.getByRole('option', { name: /abandon/i }));

        expect(inputBinary.value).toBe('00000000000');
        expect(inputIndex.value).toBe('0');
        expect(inputWord.value).toBe('abandon');
    });
});
