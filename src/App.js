import "./App.css";
import React from "react";
import GetProductListe from "./components/GetProductListe";
import AddProduct from "./components/AddProduct";
import { NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HommeProducts } from "./components/HommeCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        Page d'accueil
        <nav>
          <NavLink to="/Hommes">Hommes</NavLink>
          <NavLink to="/Femmes">Femmes</NavLink>
          <NavLink to="/Enfants">Enfants</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/Hommes",
    element: (
      <div>
        <nav>
          <NavLink to="/">Page d'accueil</NavLink>
          <NavLink to="/Femmes">Femmes</NavLink>
          <NavLink to="/Enfants">Enfants</NavLink>
        </nav>
        <HommeProducts />
        <GetProductListe categoryFilter="Hommes" />
      </div>
    ),
  },
  {
    path: "/Femmes",
    element: <GetProductListe categoryFilter="Femmes" />,
  },
  {
    path: "/Enfants",
    element: <GetProductListe categoryFilter="Enfants" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GetProductListe />
      <AddProduct />;
    </>
  );
}
export default App;
