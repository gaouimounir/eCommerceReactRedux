import "./App.css";
import React from "react";
import GetProductListe from "./components/GetProductListe";
import AddProduct from "./components/AddProduct";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HommeProducts } from "./components/HommeCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Root />
      </div>
    ),
    children: [
      {
        path: "Hommes",
        element: <HommeProducts />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Page d'accueil</NavLink>
          <NavLink to="/Hommes">Hommes</NavLink>
          <NavLink to="/Femmes">Femmes</NavLink>
          <NavLink to="/Ados">Ados</NavLink>
          <NavLink to="/Enfants">Enfants</NavLink>
          <NavLink to="/Bebes">Bébés</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

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
