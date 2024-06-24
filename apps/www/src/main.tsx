import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Docs from './pages/Docs.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import App from './App.tsx'
import { ThemeProvider } from './components/theme/ThemeProvider.tsx';

import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: '/docs',
        element: <Docs />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)