import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import MainHome from './Components/MainHome/MainHome';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/",
        element:<MainHome></MainHome>
      },
      {
        path: "blogs/",
        element: <Blogs></Blogs>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   
    
  </React.StrictMode>,
)
