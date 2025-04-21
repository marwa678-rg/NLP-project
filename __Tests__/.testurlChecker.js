import { checkForURL } from '../src/client/js/urlChecker';

describe('Testing checkForURL function', () => {
    test('should return true for valid URL', () => {
        const validUrl = 'https://www.example.com';
        expect(checkForURL(validUrl)).toBe(true);
    });

    test('should return false for invalid URL', () => {
        const invalidUrl = 'htp://www.example';
        expect(checkForURL(invalidUrl)).toBe(false);
    });

    test('should return false for empty URL', () => {
        const emptyUrl = '';
        expect(checkForURL(emptyUrl)).toBe(false);
    });
});
