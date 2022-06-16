import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import StyledProgress from './ProgressStyles';

const Progress = ({height = 3}) => {
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
            setProgress(90)
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
                // bgcolor: 'background.default'
            }}
        >
                <StyledProgress
                    height={height}
                    // variant="determinate"
                    // color="inherit"
                    // value={progress}
                />
        </Box>
    );
};

export default Progress;
