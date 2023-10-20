import "./App.css";
import React from "react";
import GetProductListe from "./components/GetProductListe";
import AddProduct from "./components/AddProduct";
import { NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        Page d'accueil
        <nav>
          <NavLink to="/Hommes">Homme</NavLink>
          <NavLink to="/Femmes">Femme</NavLink>
          <NavLink to="/Enfants">Enfant</NavLink>
        </nav>
      </div>
    ),
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
