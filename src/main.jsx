import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { First } from './components/First.jsx'
import { Seconds } from './components/Seconds.jsx'
import { Third } from './components/Third.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Seconds />,
      },
      {
        path: "/third",
        element: <Third />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
