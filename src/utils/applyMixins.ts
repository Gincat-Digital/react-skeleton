/* eslint-disable @typescript-eslint/prefer-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

// The helper function
export const applyMixins = (
	derivedCtor: { new (...args: never): any },
	constructors: Array<{ new (...args: never): any }>,
): void => {
	constructors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
					Object.create(null),
			);
		});
	});
};
