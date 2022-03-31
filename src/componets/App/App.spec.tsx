import { detectColorScheme } from './App';

describe('app', () => {
    it('should return theme scheme', () => {
        expect(detectColorScheme()).toBe('light');
    });
});
