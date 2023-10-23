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
      {
        path: "Femmes",
        element: <div>Femme</div>,
        loader: () =>
          fetch("http://localhost:3000/products").then((res) => {
            return res.json(res.data);
          }),
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
          <NavLink to="/Femmes">Ados</NavLink>
          <NavLink to="/Femmes">Enfants</NavLink>
          <NavLink to="/Femmes">Bébés</NavLink>
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
