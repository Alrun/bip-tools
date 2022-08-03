import React from 'react';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Skeleton from '../../ui/Skeleton/Skeleton';
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
                        <Skeleton variant="text" width={85} />
                    </Typography>
                </TableCell>
                <TableCell align="right" sx={{ pr: 6 }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography>
                            <Skeleton variant="text" width={285} />
                        </Typography>
                    </Box>
                </TableCell>
            </>
        ) : (
            <TableCell scope="row" sx={{ pr: 6 }}>
                <Typography variant="smRegular" component="div" sx={{ mr: 3 }}>
                    <Skeleton variant="text" width={85} />
                </Typography>
                <Box sx={{ pt: 2 }}>
                    <Typography sx={{ height: 25 }}>
                        <Skeleton variant="text" width={285} />
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
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', height: 28.015 }}>
                        <Typography variant="smRegular">
                            <Skeleton variant="text" width={475} />
                        </Typography>
                    </Box>
                </TableCell>
                <TableCell align="right">
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', height: 28.015 }}>
                        <Typography>
                            <Skeleton variant="text" width={435} />
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
                <TableCell align="right">
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography variant="smRegular" component="div" sx={{ height: 27.265 }}>
                            <Skeleton variant="text" width={475} />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Typography component="div" sx={{ height: 27.265 }}>
                            <Skeleton variant="text" width={435} />
                        </Typography>
                    </Box>
                </TableCell>
            </>
        )}
    </TableRow>
);

export default AddressSkeletonRow;
