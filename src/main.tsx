import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />;
    </ReactQueryProvider>
  </React.StrictMode>
);
