import { router } from '@/routes/router';
import type { ReactElement } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { enableMockApi } from '@/utils/api/enableMockApi';

// Localization with i18next
import '@/i18next/i18next';

import '@/styles/main.scss';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

const App = (): ReactElement => {
	return <RouterProvider router={router} />;
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
enableMockApi().then((): void => root.render(<App />));
