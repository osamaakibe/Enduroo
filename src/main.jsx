// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Import our main App component (which is our Layout)
// And import the pages we want to route to
import App from './App';
import HomePage from './pages/Homepage';

// Here we define our routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component (our Layout) is the parent
    children: [
      {
        index: true,
        element: <HomePage />, // HomePage is rendered in the <Outlet/>
      },
      // Later we will add: { path: "races", element: <RacesPage /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);