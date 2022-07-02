import toLowercase from './toLowercase';

describe('to lower case', () => {
    it('should return a lowercase string', () => {
        expect(toLowercase('String')).toBe('string');
    });

    it('should not conversion the numbers', () => {
        expect(toLowercase(3)).toBe(3);
    });

    it('should return an array with lowercase strings and numbers without conversions', () => {
        expect(toLowercase([1, 2, '3', 'string', 'String', 'STRING'])).toEqual([
            1,
            2,
            '3',
            'string',
            'string',
            'string'
        ]);
    });

    it('should not convert objects', () => {
        expect(toLowercase({ string: 'String', number: 3 })).toEqual({ string: 'String', number: 3 });
    });

    it('should not convert empty and nested objects', () => {
        expect(
            toLowercase([
                1,
                'String',
                [1, 'String'],
                {
                    string: 'String',
                    number: 3
                },
                {},
                [],
                undefined,
                null
            ])
        ).toEqual([1, 'string', [1, 'String'], { string: 'String', number: 3 }, {}, [], undefined, null]);
    });
});
