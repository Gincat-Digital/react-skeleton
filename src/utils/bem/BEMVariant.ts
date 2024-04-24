/**
 * This utility class provides functionality for creating class names
 * following the BEM methodology.
 */
export class BEMVariant {
	private readonly rootClass: string;

	public constructor(root: string) {
		this.rootClass = root;
	}

	/**
	 * Shorthand for `BEM.variation()` method.
	 */
	public $(name: string): string {
		return this.variant(name);
	}

	/**
	 * Returns the root class name.
	 */
	public root(): string {
		return this.rootClass;
	}

	/**
	 * Returns a BEM class version for a variation with the provided name and
	 * root class prefixed.

	 * Example: `root--name`.
	 */
	public variant(name: string): string {
		return `${this.rootClass}--${name}`;
	}
}
