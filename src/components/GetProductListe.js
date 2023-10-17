import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/product.action";
import "./ProductListe.css";
import { isEmpty } from "./outils";

const GetProductListe = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="product">
      {isEmpty(products)}
      {products &&
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Prix : {product.salePrice} €</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetProductListe;
