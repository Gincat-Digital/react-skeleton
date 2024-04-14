import type { AbstractProps } from '@/types/component/AbstractProps';
import { reduce } from 'lodash';

/**
 * Extracts abstract component/element attributes (id, className, ARIA attributes, data attributes, children, etc)
 * from component props and return them as an object
 */
export const getAbstractProps = (
	props: Partial<AbstractProps>,
): Partial<AbstractProps> => {
	const getAriaAttributes = (): object => {
		return reduce(
			props,
			(result, value, key) => {
				if (key.startsWith('aria-')) {
					result[key] = value;
				}
				return result;
			},
			{},
		);
	};

	const getDataAttributes = (): object => {
		return reduce(
			props,
			(result, value, key) => {
				if (key.startsWith('data-')) {
					result[key] = value;
				}
				return result;
			},
			{},
		);
	};

	return {
		key: props.key,
		id: props.id,
		className: props.className,
		style: props.style,
		role: props.role,
		tabIndex: props.tabIndex,
		...getAriaAttributes(),
		...getDataAttributes(),
	};
};
