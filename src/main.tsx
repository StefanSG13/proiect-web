import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SingleProductPage from "./pages/SingleProductPage.tsx";
import Footer from "./commonComponents/Footer.tsx";
import NavBar from "./commonComponents/NavBar.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/produse",
    element: <ProductPage />,
  },
  {
    path: "/produse/:id",
    element: <SingleProductPage />,
  },
  {
    path: "/cos",
    element: <ShoppingCartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <div className="page-container">
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);
