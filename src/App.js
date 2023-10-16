import "./App.css";
import React from "react";
import GetProductListe from "./components/ProductListe";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <AddProduct />
      <GetProductListe />;
    </>
  );
}
export default App;
