import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Skeleton from '../../ui/Skeleton/Skeleton';
import Typography from '../../ui/Typography/Typography';

interface AddressSkeletonGridProps {
    showBalance?: boolean;
}

const AddressSkeletonGrid = ({ showBalance }: AddressSkeletonGridProps) => (
    <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>
            <Typography
                variant="smBold"
                sx={{
                    mr: 2,
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                }}
            >
                Path:
            </Typography>
            <Typography variant="smRegular">
                <Skeleton variant="text" width={85} />
            </Typography>
        </Box>

        <Grid container sx={{ mb: 0, height: 28 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: (theme) => theme.typography.fontWeightMedium,
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Address:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography>
                    <Skeleton variant="text" sx={{ maxWidth: 285 }} />
                </Typography>
            </Grid>
        </Grid>

        {/*{showBalance && (*/}
        {/*    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0 }}>*/}
        {/*        <Typography sx={{ mr: 2, fontWeight: 'bolder' }}>Balance:</Typography>*/}
        {/*        <Typography sx={{ wordBreak: 'break-word' }}>0</Typography>*/}
        {/*    </Box>*/}
        {/*)}*/}

        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 0, mt: 2 }}>
            <Typography
                variant="smBold"
                sx={{
                    mr: 2,
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                }}
            >
                Keys
            </Typography>
        </Box>

        <Grid container sx={{ mb: 0, height: 28 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: (theme) => theme.typography.fontWeightMedium,
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Public:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography>
                    <Skeleton variant="text" sx={{ maxWidth: 555 }} />
                </Typography>
            </Grid>
        </Grid>

        <Grid container sx={{ mb: 0, height: 28 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: (theme) => theme.typography.fontWeightMedium,
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Private:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography>
                    <Skeleton variant="text" sx={{ maxWidth: 435 }} />
                </Typography>
            </Grid>
        </Grid>

        <Divider sx={{ pt: 2 }} />
    </Box>
);

export default AddressSkeletonGrid;
