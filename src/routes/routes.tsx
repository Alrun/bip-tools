import React from 'react';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Preloader from '../ui/Preloader/Preloader';
import NoMatch from './NoMatch';
import Dashboard from './Dashboard';
import Typography from '../ui/Typography/Typography';

const Mnemonic = React.lazy(() => import('./Mnemonic'));

const Routes = () => (
    <RouterRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route
            path="/mnemonic"
            element={
                <React.Suspense
                    fallback={
                        <Box>
                            <Skeleton sx={{ height: 80, position: 'relative', top: -17, mb: -8 }} animation="wave" />
                            <Skeleton sx={{ height: 60 }} animation="wave" />
                            <Skeleton sx={{ height: 59 }} animation="wave" />
                            <Typography variant="h1">
                                <Skeleton animation="wave" />
                            </Typography>
                            <Typography>
                                <Skeleton animation="wave" />
                            </Typography>

                            <Preloader
                                isLinear
                                sx={{
                                    position: 'fixed',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    zIndex: (theme) => theme.zIndex.modal
                                }}
                            />
                        </Box>
                    }
                >
                    <Mnemonic />
                </React.Suspense>
            }
        />
        <Route path="*" element={<NoMatch />} />
    </RouterRoutes>
);

export default Routes;
