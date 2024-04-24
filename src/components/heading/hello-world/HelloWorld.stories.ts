import type { Meta, StoryObj } from '@storybook/react';
import { abstractArgTypes } from '@/storybook/argTypes.collections';
import { argTypeCategory, requiredArgType } from '@/storybook/argTypes.utils';
import { HelloWorld } from './HelloWorld';
import { helloWorldDefaultMocks } from './HelloWorld.mocks';

const meta = {
	title: 'Heading/HelloWorld',
	component: HelloWorld,
	tags: ['autodocs'],
	argTypes: {
		...abstractArgTypes,
		name: requiredArgType({
			...argTypeCategory('data'),
			description: "Your name, to be displayed in the component's copy.",
			type: 'string',
		}),
	},
} satisfies Meta<typeof HelloWorld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: helloWorldDefaultMocks,
};
