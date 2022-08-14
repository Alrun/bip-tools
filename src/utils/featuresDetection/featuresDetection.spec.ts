import { detectColorScheme, isTouch } from './featuresDetection';

describe('features detection', () => {
    it('should return false if not touch', () => {
        expect(isTouch()).toBeFalsy();
    });

    it('should return light theme scheme as default', () => {
        expect(detectColorScheme()).toBe('light');
    });
});
