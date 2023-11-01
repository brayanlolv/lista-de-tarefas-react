import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"
import routes from './Router';
import { RouterProvider } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import NewRoutes from './NewRoutes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <NewRoutes/>

  </React.StrictMode>
);


