import React from 'react';

const useCopyToClipboard = (
    text: string,
    callback: () => {},
    successMessage: string = 'Copied to clipboard!',
    errorMessage: string = 'Copy failure!'
) => {
    const [status, setStatus] = React.useState('');
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        if (text) {
            (async () => {
                if ('clipboard' in navigator) {
                    await navigator.clipboard.writeText(text);
                    setStatus('success');
                    setMessage(successMessage);
                    callback();
                } else {
                    setStatus('error');
                    setMessage(errorMessage);
                }
            })();
        }
    }, [text]);

    return [status, message];
};

export default useCopyToClipboard;
