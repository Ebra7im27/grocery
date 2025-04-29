import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartContextProvider>
)