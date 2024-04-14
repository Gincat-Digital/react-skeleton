import React from 'react';
import { Home } from '@/pages/Home';
import type { RouteObject } from 'react-router-dom';
import { NoMatch404 } from '@/pages/NoMatch404';

export const routes: Array<RouteObject> = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NoMatch404 />,
	},
];
