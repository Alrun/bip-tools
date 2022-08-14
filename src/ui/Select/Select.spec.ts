import { filterOptions, getChecked, getFormattedOptions, getLabelOption } from './Select';

const options = [
    { value: 'opt 1', label: 'Option 1' },
    { value: 'opt 2', label: 'Option 2' },
    { value: 'opt 3', label: 'Option 3' },
    { value: 'opt 4', label: 'Option 4' },
    { value: 'opt 5', label: 'Option 5' }
];

const numberOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 }
];

describe('formatted options', () => {
    it('should return an empty array if an empty array is passed', () => {
        expect(getFormattedOptions([])).toHaveLength(0);
    });

    it('should return an array of formatted objects if passed an array of numbers', () => {
        expect(getFormattedOptions([1, 2])).toEqual([
            { value: 1, label: 1 },
            { value: 2, label: 2 }
        ]);
    });

    it('should return an array of formatted objects if passed an array of strings', () => {
        expect(getFormattedOptions(['A', 'B'])).toEqual([
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' }
        ]);
    });

    it('should return an array of formatted objects', () => {
        expect(getFormattedOptions([{ value: 'a', label: 'a' }, { value: 'B', label: 'B' }, 3, 'D'])).toEqual([
            { value: 'a', label: 'a' },
            { value: 'b', label: 'B' },
            { value: 3, label: 3 },
            { value: 'd', label: 'D' }
        ]);
    });
});

describe('filter options', () => {
    it('should return an empty array if an empty string is passed', () => {
        expect(filterOptions(options, '')).toHaveLength(0);
    });

    it('should return an empty array if an empty array is passed', () => {
        expect(filterOptions(options, [])).toHaveLength(0);
    });

    it('should return an array of options containing the passed string', () => {
        expect(filterOptions(options, 'opt 1')).toEqual([options[0]]);
    });

    it('should return an array of options containing the passed array of strings', () => {
        expect(filterOptions(options, ['opt 1', 'opt 2'])).toEqual([options[0], options[1]]);
    });

    it('should return an array of options containing the passed number', () => {
        expect(filterOptions(numberOptions, 1)).toEqual([numberOptions[0]]);
    });

    it('should return an array of options containing the passed array of numbers', () => {
        expect(filterOptions(numberOptions, [1, 2])).toEqual([numberOptions[0], numberOptions[1]]);
    });
});

describe('get label option', () => {
    it('should return the text of the option label', () => {
        expect(getLabelOption(options, 'opt 1')).toBe('Option 1');
    });

    it('should return the text of the option label if an array is passed', () => {
        expect(getLabelOption(options, ['opt 1'])).toBe('Option 1');
    });

    it('should return the text of the option label if multiple selection is supported', () => {
        expect(getLabelOption(options, ['opt 1'], true)).toBe('Option 1');
    });

    it('should return a concatenated string with the options label text', () => {
        expect(getLabelOption(options, ['opt 1', 'opt 2'], true)).toBe('Option 1, Option 2');
    });

    it('should return undefined if there is no value', () => {
        expect(getLabelOption(options, undefined)).toBeUndefined();
    });

    it('should return an empty string if there is no value, with multiple selection support', () => {
        expect(getLabelOption(options, [], true)).toBe('');
    });
});

describe('get label option', () => {
    it('should return true if the value is present in the option', () => {
        expect(getChecked(options[0], 'opt 1')).toBe(true);
    });

    it('should return true if the value is present in the option, as a number or an array of numbers', () => {
        expect(getChecked(numberOptions[0], 1, [2, 3])).toBe(true);
    });

    it('should return false if the value is not present in the option, even if it is in the default value', () => {
        expect(getChecked(options[0], 'opt 3', ['opt 1', 'opt 2'])).toBe(false);
    });
});
