import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
