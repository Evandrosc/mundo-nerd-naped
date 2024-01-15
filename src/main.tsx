import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './page/Home'
import { ListPosts } from './page/ListPosts'
import { Post } from './page/Post'
import { Error } from './components/Error'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { defaultTheme } from './styles/themes/default.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Séries',
        element: <ListPosts gender='Séries' />,
      },
      {
        path: '/filmes',
        element: <ListPosts gender='Filmes' />,
      },
      {
        path: '/Animes',
        element: <ListPosts gender='Animes' />,
      },
      {
        path: '/Games',
        element: <ListPosts gender='Games' />,
      },
      {
        path: '/Séries/:id',
        element: <Post />,
      },
      {
        path: '/Filmes/:id',
        element: <Post />,
      },
      {
        path: '/Animes/:id',
        element: <Post />,
      },
      {
        path: '/Games/:id',
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
