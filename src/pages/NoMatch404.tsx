import type { ReactElement } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const NoMatch404 = (): ReactElement => {
	const location = useLocation();

	return (
		<>
			<header>
				<h1>
					Whoops! We couldn't find nothing at <code>{location.pathname}</code>
				</h1>
			</header>
			<main>
				<p>
					Return to <a href='/'>main page</a>
				</p>
			</main>
		</>
	);
};
