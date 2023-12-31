import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import EditCoffee from "./components/EditCoffee";
import CoffeeContext from "./Context/CoffeeContext";
import SignUp from "./components/SignUp";
import AuthProvider from "./Context/AuthProvider";
import SignIn from "./components/SignIn";
import UsersTable from "./components/UsersTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
      },
      {
        path: "/coffee/edit/:id",
        element: <EditCoffee />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/user",
        element: <UsersTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoffeeContext>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CoffeeContext>
  </React.StrictMode>
);
