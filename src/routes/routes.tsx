import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Preloader from '../ui/Progress/Progress';
import NoMatch from './NoMatch';
import Dashboard from './Dashboard';

const Mnemonic = React.lazy(() => import('./Mnemonic'));

const Routes = () => (
    <RouterRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route
            path="/mnemonic"
            element={
                <React.Suspense fallback={<Preloader />}>
                    <Mnemonic />
                </React.Suspense>
            }
        />
        <Route path="*" element={<NoMatch />} />
    </RouterRoutes>
);

export default Routes;
