import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProduct from "./EditProduct";
import { isEmpty } from "./outils";
import "./ProductListe.css";

const GetProductListe = ({ categoryFilter }) => {
  const products = useSelector((state) => state.productReducer.products);

  const filteredProducts = categoryFilter
    ? products.filter((product) =>
        Array.isArray(product.categories)
          ? products.categories.includes(categoryFilter)
          : products.categories === categoryFilter
      )
    : products;

  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditProduct = (productId) => {
    setEditingProductId(productId);
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  return (
    <div className="product">
      {!isEmpty(filteredProducts)}
      {filteredProducts &&
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            {editingProductId === product.id ? (
              <EditProduct product={product} onCancel={handleCancelEdit} />
            ) : (
              <>
                <img src={product.imageUrl} alt={product.title} />
                <div className="product-details">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-categorie">{product.categories}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-basePrice">
                    Prix : {product.basePrice} €
                  </p>
                  <p className="product-salePrice">
                    Prix : {product.salePrice} €
                  </p>
                </div>
                <button onClick={() => handleEditProduct(product.id)}>
                  Modifier
                </button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default GetProductListe;
