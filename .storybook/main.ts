import gcwp from '@.webpack/gcwp';
import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { concat, merge } from 'lodash';
import type { Configuration as WebpackConfig } from 'webpack';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'storybook-react-i18next',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: [
		{
			from: '../src/assets',
			to: '/assets',
		},
		{
			from: '../src/locales',
			to: '/locales',
		},
		{
			from: '../.msw/worker',
			to: '/',
		},
	],
	// eslint-disable-next-line no-shadow
	webpackFinal(config) {
		config.resolve = merge(config.resolve, {
			extensions: gcwp.development.resolve.extensions,
			alias: {
				...gcwp.development.resolve.alias,
				/* eslint-disable @typescript-eslint/naming-convention */
				'@.msw': path.resolve(process.cwd(), '.msw'),
				'@.scripts': path.resolve(process.cwd(), '.scripts'),
				'@.storybook': path.resolve(process.cwd(), '.storybook'),
				'@.webpack': path.resolve(process.cwd(), '.webpack'),
				'@mocks': path.resolve(process.cwd(), 'mocks'),
				/* eslint-enable @typescript-eslint/naming-convention */
			},
		} satisfies WebpackConfig['resolve']);

		config.module = merge(config.module, {
			rules: gcwp.development.module.rules?.filter(
				(rule) => (rule.test as RegExp).source === /\.(c|s(c|a))ss$/u.source,
			),
		} satisfies WebpackConfig['module']);

		config.plugins = concat(config.plugins, gcwp.development.plugins);

		return config;
	},
};

export default config;
