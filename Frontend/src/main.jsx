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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoffeeContext>
      <RouterProvider router={router} />
    </CoffeeContext>
  </React.StrictMode>
);
