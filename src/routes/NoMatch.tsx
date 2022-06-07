import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';

export default function NoMatch() {
    const navigate = useNavigate();

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography color="primary" fontWeight="bold" fontSize="9rem">
                404
            </Typography>
            <Typography variant="h4" paragraph gutterBottom>
                This page could not be found.
            </Typography>
            <Button onClick={() => navigate('/')}>Back To Home</Button>
        </Box>
    );
}
