import "./App.css";
import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <header>
        <div>
          <NavLink>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tendanceshopping.com%2Fimg%2Fheader%2Flogo.png&f=1&nofb=1&ipt=96e49ef3381d1c504609e18fc407e2e2ebdf6c111b58d11649cfec6c7d59de73&ipo=images"
              alt=""
              style={{ width: "80%" }}
            />
          </NavLink>
        </div>
        <nav>
          <NavLink
            className={"linkCategory"}
            to="/"
            onClick={() => handleCategoryClick("")}
          >
            Page d'accueil
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Hommes"
            onClick={() => handleCategoryClick("Hommes")}
          >
            Hommes
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Femmes"
            onClick={() => handleCategoryClick("Femmes")}
          >
            Femmes
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Ados"
            onClick={() => handleCategoryClick("Ados")}
          >
            Ados
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Enfants"
            onClick={() => handleCategoryClick("Enfants")}
          >
            Enfants
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Bebes"
            onClick={() => handleCategoryClick("Bebes")}
          >
            Bébés
          </NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");
  return (
    <>
      <RouterProvider router={router} />
      <GetProductListe />
      <AddProduct />;
    </>
  );
}
export default App;
