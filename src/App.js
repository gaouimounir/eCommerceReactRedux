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
import { ArticleFiltrer } from "./components/FiltreCategory";
import { useDispatch } from "react-redux";
import { setFilter } from "./actions/filter.action";

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
        path: ":category",
        element: <ArticleFiltrer />,
      },
    ],
  },
]);

function Root() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <header>
        <div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tendanceshopping.com%2Fimg%2Fheader%2Flogo.png&f=1&nofb=1&ipt=96e49ef3381d1c504609e18fc407e2e2ebdf6c111b58d11649cfec6c7d59de73&ipo=images"
            alt=""
            style={{ width: "80%" }}
          />
        </div>
        <nav>
          <NavLink
            className={"linkCategory"}
            to="/"
            onClick={() => {
              handleCategoryClick("allArticles");
              dispatch(setFilter("allArticles"));
            }}
          >
            Page d'accueil
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Hommes"
            onClick={() => {
              handleCategoryClick("Hommes");
              dispatch(setFilter("Hommes"));
            }}
          >
            Hommes
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Femmes"
            onClick={() => {
              handleCategoryClick("Femmes");
              dispatch(setFilter("Femmes"));
            }}
          >
            Femmes
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Ados"
            onClick={() => {
              handleCategoryClick("Ados");
              dispatch(setFilter("Ados"));
            }}
          >
            Ados
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Enfants"
            onClick={() => {
              handleCategoryClick("Enfants");
              dispatch(setFilter("Enfants"));
            }}
          >
            Enfants
          </NavLink>
          <NavLink
            className={"linkCategory"}
            to="/Bébés"
            onClick={() => {
              handleCategoryClick("Bébés");
              dispatch(setFilter("Bébés"));
            }}
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
  const [categoryFilter] = useState("");

  return (
    <>
      <RouterProvider router={router} />
      <GetProductListe categoryFilter={categoryFilter} />
      <AddProduct />;
    </>
  );
}
export default App;
