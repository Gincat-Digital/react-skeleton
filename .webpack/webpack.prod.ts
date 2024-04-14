import { type GincatWebpackConfig } from '@gincat-digital/webpack/dist/types/GincatWebpack.types';
import webpack from 'webpack';
import path from 'path';
import gcwp from './gcwp';

export default {
	...gcwp.production,
	resolve: {
		...gcwp.development.resolve,
		alias: {
			...gcwp.development.resolve.alias,
			/* eslint-disable @typescript-eslint/naming-convention */
			'@msw': path.resolve(process.cwd(), '.msw'),
			'@scripts': path.resolve(process.cwd(), '.scripts'),
			'@storybook': path.resolve(process.cwd(), '.storybook'),
			'@webpack': path.resolve(process.cwd(), '.webpack'),
			'@mocks': path.resolve(process.cwd(), 'mocks'),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	},
	plugins: [
		...gcwp.production.plugins,
		// Ignore local-only development tools from the production bundle
		new webpack.IgnorePlugin({
			resourceRegExp: /\.msw/u,
		}),
		// --------------------------------------------------------------
	],
} as GincatWebpackConfig;
