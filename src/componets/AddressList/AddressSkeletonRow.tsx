import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '../../ui/Typography/Typography';

interface AddressSkeletonRowProps {
    xlUp: boolean;
    showBalance: boolean;
}

const AddressSkeletonRow = ({ xlUp, showBalance }: AddressSkeletonRowProps) => (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {xlUp ? (
            <>
                <TableCell scope="row" sx={{ pr: 6 }}>
                    <Typography variant="smRegular">
                        <Skeleton
                            sx={{
                                height: 30,
                                maxWidth: 85,
                                mb: -1
                            }}
                            animation="wave"
                        />
                    </Typography>
                </TableCell>
                <TableCell align="right" sx={{ pr: 6 }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: '"Roboto Mono", monospace' }}>
                            <Skeleton
                                sx={{
                                    height: 34,
                                    maxWidth: 285,
                                    mb: 1.5
                                }}
                                animation="wave"
                            />
                        </Typography>
                    </Box>
                </TableCell>
            </>
        ) : (
            <TableCell scope="row" sx={{ pr: 6 }}>
                <Typography component="div" variant="smRegular" sx={{ mr: 3, pt: 1.5 }}>
                    <Skeleton
                        sx={{
                            height: 30,
                            maxWidth: 85,
                            mb: -1
                        }}
                        animation="wave"
                    />
                </Typography>

                <Box sx={{ display: 'inline-flex', alignItems: 'center', pt: 1.5 }}>
                    <Typography
                        sx={{
                            mr: 1,
                            fontFamily: '"Roboto Mono", monospace'
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
                </Box>
            </TableCell>
        )}

        {/*{showBalance && (*/}
        {/*    <TableCell align="right" sx={{ pr: 6, pt: { lg: 8, xl: 0 } }}>*/}
        {/*        <Typography>0</Typography>*/}
        {/*    </TableCell>*/}
        {/*)}*/}

        {xlUp ? (
            <>
                <TableCell align="right" sx={{ pr: 6 }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography variant="smRegular" sx={{ fontFamily: '"Roboto Mono", monospace', mr: 1 }}>
                            <Skeleton
                                sx={{
                                    height: 34,
                                    maxWidth: 555,
                                    mb: 1.5
                                }}
                                animation="wave"
                            />
                        </Typography>
                    </Box>
                </TableCell>
                <TableCell align="right">
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                mr: 1
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
                    </Box>
                </TableCell>
            </>
        ) : (
            <>
                <TableCell align="right" sx={{ width: '100%', pr: 6 }}>
                    <Box>
                        <Box sx={{}}>
                            <Typography
                                variant="smRegular"
                                sx={{
                                    mr: 1,
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.secondary.dark
                                            : theme.palette.secondary.light
                                }}
                            >
                                Public key
                            </Typography>
                        </Box>
                        <Box sx={{ pt: { lg: 2, xl: 0 } }}>
                            <Typography
                                sx={{
                                    mr: 1,
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.secondary.dark
                                            : theme.palette.secondary.light
                                }}
                            >
                                Private key
                            </Typography>
                        </Box>
                    </Box>
                </TableCell>
                <TableCell align="right" sx={{}}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography variant="smRegular" sx={{ fontFamily: '"Roboto Mono", monospace', mr: 1 }}>
                            <Skeleton
                                sx={{
                                    height: 34,
                                    maxWidth: 555,
                                    mb: 1.5
                                }}
                                animation="wave"
                            />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                mr: 1
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
                    </Box>
                </TableCell>
            </>
        )}
    </TableRow>
);

export default AddressSkeletonRow;
