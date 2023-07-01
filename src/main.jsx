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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AllToys from './Components/AllToys/AllToys'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<MainHome></MainHome>
      },
      {
        path: "blogs/",
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
