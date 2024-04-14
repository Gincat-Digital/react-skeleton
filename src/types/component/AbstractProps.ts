import type { AriaAttributes, AriaRole, CSSProperties, ReactNode } from 'react';

/**
 * Wrap useful and common React component and HTML element attributes,
 * suitable for being included into custom components props.
 */
export type AbstractProps = {
	key?: string | number | null;
	id?: string;
	className?: string;
	children?: ReactNode;
	role?: AriaRole;
	tabIndex?: number;
	style?: CSSProperties;
} & Record<`data-${string}`, string | number | boolean | null | undefined> &
	AriaAttributes;
