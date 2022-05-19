interface ToLowercaseInterface {
    <T>(value: string | T | Array<string | T>): string | T | Array<string | T>;
}

/**
 * Convert value to lower case.
 * @param {string | T | Array<string | T>} value Value to convert.
 * @returns {string | T | Array<string | T>}
 */
const toLowercase: ToLowercaseInterface = (value) => {
    if (typeof value === 'string') return value.toLowerCase();
    if (typeof value === 'number') return value;

    if (Array.isArray(value))
        return value.map((v) => {
            if (typeof v === 'string') return v.toLowerCase();
            if (typeof v === 'number') return v;

            return v;
        });

    return value;
};

export default toLowercase;
