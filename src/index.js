import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreditCardSelection from './pages/CreditCardSelection';
import { checkUserRegistry } from './api/user';

(async () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />// await checkUserRegistry() ? <Dashboard /> : <Home />,
    },
    {
      path: "/credit-card-selection",
      element:  <CreditCardSelection />
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    }
  ]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
})()



