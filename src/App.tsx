import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainLayout } from './components/layout/MainLayout';
import { Index } from './pages/Index';
import { EventsPage } from './pages/Events';
import { CategoriesPage } from './pages/Categotries';
import { AuthLayout } from './components/layout/AuthLayout';
import { RegisterPage } from './pages/Register';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/events/:type',
        element: <EventsPage />,
      },
      {
        path: '/events/categories',
        element: <CategoriesPage />,
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  }

]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

