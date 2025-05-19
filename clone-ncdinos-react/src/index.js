import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';
import './styles/icons.css';
import './styles/swiper.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();
