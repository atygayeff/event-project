import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children [
      {
        path: '/',
        element: <Index />
      }
    ]
}
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

