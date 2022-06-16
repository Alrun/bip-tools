import React from 'react';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Progress from '../ui/Progress/Progress';
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

                            <Progress />
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
