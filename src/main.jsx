import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import MainHome from "./Components/MainHome/MainHome";
import AuthProvider from "./Components/Provider/AuthProvider";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllToys from "./Components/AllToys/AllToys";
import ToyDetails from "./Components/AllToys/ToyDetails/ToyDetails";
import AddAToy from "./Components/AddAToy/AddAToy";
import MyToys from "./Components/MyToys/MyToys";
import EditToy from "./Components/MyToys/EditToy";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
      },
      {
        path: "blogs/",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoys/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
        element: (
          <PrivateRoute>
            <EditToy></EditToy>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
