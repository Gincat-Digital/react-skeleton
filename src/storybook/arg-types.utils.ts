import type { InputType } from '@storybook/types';
import { isObject } from 'lodash';
import type { Category } from './arg-types.types';

export const argTypeCategory = (name: Category): Pick<InputType, 'table'> => ({
	table: {
		category: name,
	},
});

export const requiredArgType = (argType: InputType): InputType => ({
	...argType,
	type: {
		...(isObject(argType.type)
			? argType.type
			: {
					name: argType.type as
						| 'string'
						| 'number'
						| 'boolean'
						| 'symbol'
						| 'function',
				}),
		required: true,
	},
});
