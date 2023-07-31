import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getRouteConfig } from '../config/getRouteConfig';
import { Loader } from 'shared/components';
import { Context } from 'app/providers/ContextProvider';

export const AppRouter = () => {
    const routeConfig = getRouteConfig();

    const { onResize } = useContext(Context);

    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        onResize(screenWidth);
    });

    useEffect(() => {
        onResize(window.innerWidth);
    }, []);

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