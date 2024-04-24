/* eslint-disable max-lines */
import type { InputType } from '@storybook/types';
import { argTypeCategory } from './argTypes.utils';

export const role: InputType = {
	...argTypeCategory('accesibility'),
	description:
		'HTML "role" attribute, defines element\'s purpose for accessibility.',
	type: 'string',
};

export const style: InputType = {
	...argTypeCategory('visual'),
	description: 'HTML "style" attribute, inline CSS styling for an element.',
	type: {
		name: 'object',
		value: {},
	},
};

export const tabIndex: InputType = {
	...argTypeCategory('accesibility'),
	description: 'HTML "tabindex" attribute, specifies element\'s tabbing order.',
	type: 'string',
};

export const id: InputType = {
	...argTypeCategory('data'),
	description: 'HTML "id" attribute, uniquely identifies an element.',
	type: 'string',
};

export const className: InputType = {
	...argTypeCategory('data'),
	description:
		'HTML "class" attribute, assigns one or more classes to an element for styling.',
	type: 'string',
};
