import "./App.css";
import React from "react";
import GetProductListe from "./components/GetProductListe";
import AddProduct from "./components/AddProduct";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Page d'accueil</div>,
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
