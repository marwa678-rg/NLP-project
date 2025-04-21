// JS files
import { handleSubmit } from './js/formHandler';

// Attach the event listener for the form
document.getElementById('urlForm').addEventListener('submit', handleSubmit);

// SCSS file 
import './styles/main.scss';

//service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
