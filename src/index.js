import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import { checkUserRegistry } from './api/user';

(async () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: await checkUserRegistry() ? <Dashboard /> : <Welcome />,
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



