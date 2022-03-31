export const isBrowser = typeof window !== 'undefined';
export const isIOS = isBrowser && typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
