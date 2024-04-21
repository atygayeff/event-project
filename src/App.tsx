import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainLayout } from './components/layout/MainLayout';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
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

