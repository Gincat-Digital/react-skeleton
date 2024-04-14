/**
 * Enables the MSW mocking API for local development purposes only.
 */
export const enableMockApi = async (): Promise<void> => {
	if (process.env.NODE_ENV === 'development') {
		const { worker } = await import('@.msw/browser');

		await worker.start({
			onUnhandledRequest: 'bypass',
		});
	}
};
