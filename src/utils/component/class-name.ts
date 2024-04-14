import type { AbstractProps } from '@/types/component/AbstractProps';
import clsx from 'clsx';

/**
 * Converts a variety of input types (strings, arrays, objects members evaluated to true, etc)
 * into a single string to be used as a `className` value.
 */
export const className = (
	...args: Array<clsx.ClassValue>
): Pick<AbstractProps, 'className'> => {
	return {
		className: clsx(...args),
	};
};
