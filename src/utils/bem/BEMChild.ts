/**
 * This utility class provides functionality for creating class names
 * following the BEM methodology.
 */
export class BEMChild {
	private readonly rootClass: string;

	public constructor(root: string) {
		this.rootClass = root;
	}

	/**
	 * Shorthand for `BEM.child()` method.
	 */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	public _(name: string): string {
		return this.child(name);
	}

	/**
	 * Returns the root class name.
	 */
	public root(): string {
		return this.rootClass;
	}

	/**
	 * Returns a BEM class version for a child element with the provided name and
	 * root class prefixed.

	 * Example: `root__name`.
	 */
	public child(name: string): string {
		return `${this.rootClass}__${name}`;
	}
}
