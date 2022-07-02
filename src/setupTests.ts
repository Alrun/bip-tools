/**
 * jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 * expect(element).toHaveTextContent(/react/i)
 * learn more: https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
/**
 * TODO: Replace package 'text-encoding' when Jest fixes the TextEncoder bug.
 * TextEncoder.encode must refer to the same Uint8Array global constructor.
 *
 * it('TextEncoder.encode references the same global Uint8Array constructor', () => {
 *     expect(new TextEncoder().encode('')).toBeInstanceOf(Uint8Array);
 * });
 */
// import { TextEncoder } from 'util';
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
