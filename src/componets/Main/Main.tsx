import React from 'react';
import Box from '@mui/material/Box';
import Routes from '../../routes/routes';

const Main = () => (
    <Box component="main" sx={{ flexGrow: 1, p: 3, px: { lg: 8 } }}>
        <Routes />
    </Box>
);

export default Main;
