import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutpage from './pages/Aboutpage.jsx';
import Productpage from './pages/Productpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path:"about",
    element:<Aboutpage/>
  },
  {
    path:"products",
    element:<Productpage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
