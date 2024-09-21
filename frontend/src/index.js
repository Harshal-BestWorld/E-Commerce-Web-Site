// index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import ShopContextProvider from './Context/ShopContext';

const container = document.getElementById('root'); // Get the root element from the HTML
const root = createRoot(container); // Create a root
root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);
