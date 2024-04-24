/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { applyMixins } from '../applyMixins';
import { BEMChild } from './BEMChild';
import { BEMVariant } from './BEMVariant';

/**
 * This utility class provides functionality for creating class names
 * following the BEM methodology.
 */
export class BEM
	implements Omit<BEMChild, 'rootClass'>, Omit<BEMVariant, 'rootClass'>
{
	private readonly rootClass: string;

	public constructor(root: string) {
		this.rootClass = root;
	}

	/**
	 * Return an instance of 'BEMVariant' with the provided name, which
	 * allows you to get variant classes only for that name.
	 */
	public get(name: string): BEMVariant {
		return new BEMVariant(this.child(name));
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/* 
This allow to implement methods from multiple classes into a single one,
like 'extend' but without the limitation of only one class.
*/
export interface BEM
	extends Omit<BEMChild, 'rootClass'>,
		Omit<BEMVariant, 'rootClass'> {}

applyMixins(BEM, [BEMChild, BEMVariant]);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
