import { Worker } from '@react-pdf-viewer/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Worker workerUrl="https://storage.googleapis.com/oler-public/1.pdf">
            <App />
        </Worker>
    </React.StrictMode>,
);
