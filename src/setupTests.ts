/**
 * jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 * expect(element).toHaveTextContent(/react/i)
 * learn more: https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { TextEncoder } from 'text-encoding';

// Adds support TextEncoder to Jest.
Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder
});

// Adds support matchMedia to Jest.
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    })
});
