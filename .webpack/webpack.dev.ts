import type { GincatWebpackConfig } from '@gincat-digital/webpack/dist/types/GincatWebpack.types';
import lodash from 'lodash';
import path from 'path';
import gcwp from './gcwp';

export default {
	...gcwp.development,
	resolve: {
		...gcwp.development.resolve,
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
	},
	devServer: {
		...gcwp.development.devServer,
		static: lodash.concat(
			gcwp.development.devServer?.static,
			// Serve the MSW worker to enable mocking API.
			{
				directory: path.resolve(process.cwd(), '.msw/worker/'),
				publicPath: '/',
			},
			// -------------------------------------------
		),
	},
} as GincatWebpackConfig;
