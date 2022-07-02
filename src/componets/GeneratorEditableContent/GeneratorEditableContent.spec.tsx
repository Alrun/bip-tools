import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import enList from '../../wordlists/english';
import GeneratorEditableContent, { extractEntropy } from './GeneratorEditableContent';

describe('generator editable content', () => {
    const words = ['zoo', 'abandon', 'zoo', 'abandon'];

    it('should render a button', () => {
        renderWithTheme(<GeneratorEditableContent words={words} wordList={enList} onChange={() => {}} />);

        expect(screen.getByRole('textbox', { name: /Enter your phrase/i })).toBeInTheDocument();
    });

    describe('extractEntropy', () => {
        it('should ', () => {
            const { binEntropy, hexEntropy, rawBinList } = extractEntropy(words, enList);

            expect(binEntropy).toBe('1111111111100000000000111111111110000000');
            expect(hexEntropy).toBe('ffe003ff80');
            expect(rawBinList).toEqual(['11111111111', '00000000000', '11111111111', '00000000000']);
        });
    });
});
