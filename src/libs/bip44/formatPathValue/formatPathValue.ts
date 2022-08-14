/**
 * Formats a derived path value.
 *
 * @param {string} str The derived normal or hardened value.
 */
const formatPathValue = (str: string) => {
    const MAX_HARDENED = 2147483647;
    const MAX_NORMAL = 4294967295;
    const hardened = str.match(/'$/);

    if (hardened) {
        const num = +str.replace(/'$/, '');

        if (Number.isNaN(num)) return "0'";

        return +str.replace(/'$/, '') > MAX_HARDENED ? `${MAX_HARDENED}'` : str;
    }

    if (Number.isNaN(+str)) return '0';

    return +str > MAX_NORMAL ? `${MAX_NORMAL}` : str;
};

export default formatPathValue;
