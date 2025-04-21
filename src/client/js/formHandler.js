//check for url
import { checkForURL } from './urlChecker.js';


const serverURL = 'http://127.0.0.1:8000/analyze-url';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
      }
    });
function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    let url = document.getElementById('url').value;


    // Validate URL
    if (!checkForURL(url)) {
        document.getElementById('results').innerHTML = `<p style="color:red;">Please enter a valid URL.</p>`;
        return;
    }

//send url to server
fetch(serverURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url})
})
.then(res => res.json())
.then(data => {
    if (data.error) {
        document.getElementById('results').innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
    } else {
        
 // Update the HTML elements with the API response data
 document.getElementById('sentiment').textContent = `Sentiment: ${data.sentiment || 'N/A'}`;
 document.getElementById('contentType').textContent = `Content Type: ${data.contentType || 'N/A'}`;
 document.getElementById('textPreview').textContent = `Text Preview: ${data.textPreview || 'N/A'}`;

    }
})
.catch(err => {
    document.getElementById('results').innerHTML = `<p style="color:red;">Server error: ${err.message}</p>`;
});
}


export { handleSubmit };

