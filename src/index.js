import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <CssBaseline />
    <App />
    </ThemeContextProvider>
  </React.StrictMode>
);


