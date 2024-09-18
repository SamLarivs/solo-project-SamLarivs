/*
./client/index.js // webpack entry file
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/client/App.jsx';

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);