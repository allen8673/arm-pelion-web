import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouterGuard from './guard';
import { routerConfig } from './routerConfig';

export const Router: React.FC = () => {
    const component =  (
        <BrowserRouter >
            <Switch>
                <RouterGuard config={routerConfig} />
            </Switch>
        </BrowserRouter>
    );
    return component;
};
