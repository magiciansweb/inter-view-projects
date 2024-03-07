import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Home';
import Design from './Design';
import Marketing from './Marketing';
import Development from './Development';
import CreateTeam from './CreateTeam';
import Roadmap from './Roadmap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/design',
        element:<Design></Design>
      },
      {
        path:'/marketing',
        element:<Marketing></Marketing>
      },
      {
        path:'/development',
        element:<Development></Development>
      },
      {
        path:'/createteam',
        element:<CreateTeam></CreateTeam>
      },
      {
        path:'/roadmap',
        element:<Roadmap></Roadmap>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </div>,
)
