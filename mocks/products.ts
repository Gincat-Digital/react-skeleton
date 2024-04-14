import type { RestHandler } from 'msw';
import { rest } from 'msw';

export default [
	rest.get('/api/products', async (req, res, ctx) => {
		return res(
			// eslint-disable-next-line no-magic-numbers
			ctx.delay(500),
			ctx.json({
				products: [
					{
						id: 1,
						name: 'Apple',
						color: 'red',
					},
				],
			}),
		);
	}),
] as Array<RestHandler>;
