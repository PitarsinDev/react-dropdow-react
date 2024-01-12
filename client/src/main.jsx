import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from './Page/About.jsx'
import Services from './Page/Services.jsx'
import Content from './Page/Content.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "content",
    element: <Content />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
