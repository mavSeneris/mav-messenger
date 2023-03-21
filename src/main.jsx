import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './error-page';
import App from './App'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);