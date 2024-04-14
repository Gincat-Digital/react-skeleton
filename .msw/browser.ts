import { setupWorker } from 'msw';

// Mock API handlers
import products from '@mocks/products';
// -----------------

export const handlers = [...products];

export const worker = setupWorker(...handlers);
