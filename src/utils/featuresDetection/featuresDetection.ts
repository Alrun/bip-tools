export const isBrowser = typeof window !== 'undefined';
export const isIOS = isBrowser && typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

/**
 * Defines touchscreen support.
 *
 * @returns {boolean}
 */
export const isTouch = () => {
    if (isBrowser) {
        const mediaQuery = window.matchMedia('(pointer: coarse)');

        return (
            mediaQuery.matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        );
    }

    return false;
};

/**
 * Detects browser color scheme.
 *
 * @returns {'dark' | 'light}
 */
export const detectColorScheme = (): 'dark' | 'light' => {
    if (!window.matchMedia) return 'light';
    /* istanbul ignore if */
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
};
