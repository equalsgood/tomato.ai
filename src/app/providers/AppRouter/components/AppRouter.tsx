import React, { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { Loader } from 'shared/components';
import { Context } from 'app/providers/ContextProvider';

export const AppRouter = () => {
    const { onResize } = useContext(Context);

    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        onResize(screenWidth);
    });

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