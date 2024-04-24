import type { AbstractProps } from '@/types/component/AbstractProps';
import type { ArgTypes } from '@storybook/react';
import { id, className, style, role, tabIndex } from './arg-types';

export const abstractArgTypes: ArgTypes<AbstractProps> = {
	id,
	className,
	style,
	role,
	tabIndex,
};
