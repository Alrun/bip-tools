import React from 'react';
import Box from '@mui/material/Box';
import Typography from '../../ui/Typography/Typography';
import Skeleton from '../../ui/Skeleton/Skeleton';

const MnemonicGroupItemSkeleton = () => (
    <Box sx={{ py: 1 }}>
        <Typography variant="xsBold" component="div" align="center">
            <Skeleton variant="text" sx={{ width: 10, mb: 1.945, mx: 'auto' }} />
        </Typography>
        <Skeleton height={28} sx={{ mb: 3.6 }} />
        <Skeleton height={28} sx={{ mb: 3.6 }} />
        <Skeleton height={28} sx={{ mb: 1 }} />
    </Box>
);

export default MnemonicGroupItemSkeleton;
