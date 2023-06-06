import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { Loader } from 'shared/components';

export const AppRouter = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                { routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};