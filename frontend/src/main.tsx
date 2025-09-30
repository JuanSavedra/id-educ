import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

import HomePage from './pages/HomePage.tsx'
import GradePage from './pages/GradePage.tsx'
import OcurrencesPage from './pages/OccurrencesPage.tsx'
import MbtiPage from './pages/MbtiPage.tsx' 

import App from './App.tsx'
import { UserProvider } from './context/UserContext.tsx'
import ProfilePage from './pages/ProfilePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/notas',
        element: <GradePage />
      },
      {
        path: '/ocorrências',
        element: <OcurrencesPage />
      },
      {
        path: '/mbti',
        element: <MbtiPage />
      },
      {
        path: '/perfil',
        element: <ProfilePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)


