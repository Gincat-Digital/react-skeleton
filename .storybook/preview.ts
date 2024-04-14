import type { Preview } from '@storybook/react';
import i18next from '@/i18next/i18next';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '@.msw/browser';

import '@/styles/main.scss';

// Initialize the MSW mock API.
initialize(
	{
		onUnhandledRequest: 'bypass',
	},
	handlers,
);
// ----------------------------

const preview: Preview = {
	globals: {
		locale: 'en',
		locales: {
			en: 'English',
		},
	},
	parameters: {
		i18next,
		loaders: [mswLoader],
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/iu,
			},
		},
	},
	argTypes: {
		key: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
};

export default preview;
