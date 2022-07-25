import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
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
            <Typography flexGrow={1} variant="smRegular" component="div" sx={{ wordBreak: 'break-word' }}>
                <Skeleton
                    sx={{
                        height: 30,
                        maxWidth: 85,
                        mb: -1
                    }}
                    animation="wave"
                />
            </Typography>
        </Box>

        <Grid container sx={{ mb: 0 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: 'bolder',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Address:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography
                    component="div"
                    sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        wordBreak: 'break-word',
                        mr: 2,
                        width: '100%'
                    }}
                >
                    <Skeleton
                        sx={{
                            height: 34,
                            maxWidth: 285,
                            mb: 1.5
                        }}
                        animation="wave"
                    />
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

        <Grid container sx={{ mb: 0 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: 'bolder',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Public:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography
                    component="div"
                    sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        wordBreak: 'break-word'
                    }}
                >
                    <Skeleton
                        sx={{
                            height: 34,
                            maxWidth: 555,
                            mb: 1.5
                        }}
                        animation="wave"
                    />
                </Typography>
            </Grid>
        </Grid>

        <Grid container sx={{ mb: 0 }} alignItems="center">
            <Grid item>
                <Typography
                    sx={{
                        mr: 2,
                        fontWeight: 'bolder',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
                    }}
                >
                    Private:
                </Typography>
            </Grid>
            <Grid item flexGrow={1}>
                <Typography
                    component="div"
                    sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        wordBreak: 'break-word'
                    }}
                >
                    <Skeleton
                        sx={{
                            height: 34,
                            maxWidth: 435,
                            mb: 1.5
                        }}
                        animation="wave"
                    />
                </Typography>
            </Grid>
        </Grid>

        <Divider sx={{ pt: 2 }} />
    </Box>
);

export default AddressSkeletonGrid;
