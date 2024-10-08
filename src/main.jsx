import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ShopContextProvider> <App /></ShopContextProvider>
   
  </BrowserRouter>
);
