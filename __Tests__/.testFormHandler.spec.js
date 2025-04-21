import { handleSubmit } from '../src/client/js/formHandler';

// Mock the DOM elements to simulate user input
document.body.innerHTML = `
    <form id="urlForm">
        <input type="text" id="url" value="https://www.example.com" />
        <div id="results"></div>
        <div id="sentiment"></div>
        <div id="contentType"></div>
         <div id="textPreview"></div>
         </form>
`;

describe('Testing the handleSubmit function', () => {
    test('should call preventDefault on form submit', () => {
        const mockPreventDefault = jest.fn();
        const event = { preventDefault: mockPreventDefault };

        handleSubmit(event);  // Call handleSubmit

        expect(mockPreventDefault).toHaveBeenCalled();  // Verify that preventDefault was called
    });

    test('should display an error for invalid URL', () => {
        document.getElementById('url').value = 'invalid-url';
        handleSubmit({ preventDefault: jest.fn() });

        const results = document.getElementById('results').innerHTML;
        expect(results).toContain('Please enter a valid URL.');
    });

    test('should call fetch and display sentiment result', async () => {
        // Mocking fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    sentiment: 'Positive',
                    contentType: 'text/html',
                    textPreview: 'Sample text preview'
                })
            })
        );

        document.getElementById('url').value = 'https://www.example.com';
        await handleSubmit({ preventDefault: jest.fn() });
   // Use a short delay to ensure the DOM is updated
   await new Promise(resolve => setTimeout(resolve, 0));
        const sentiment = document.getElementById('sentiment').textContent;
        expect(sentiment).toBe('Sentiment: Positive');
    });
});
