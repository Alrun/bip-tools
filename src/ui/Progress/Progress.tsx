import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Progress = () => {
    const [progress, setProgress] = React.useState(0);

    // TODO: Connect progress bar with loading state
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                // if (oldProgress === 100) {
                //     return 0;
                // }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                zIndex: 'snackbar',
                // color: 'red',
                bgcolor: 'background.default'
            }}
        >
            {progress !== 100 && progress !== 0 && (
                <LinearProgress
                    variant="determinate"
                    // color="inherit"
                    value={progress}
                />
            )}
        </Box>
    );
};

export default Progress;
