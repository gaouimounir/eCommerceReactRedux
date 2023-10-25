import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import { useSelector } from "react-redux";
import EditProduct from "./EditProduct";
import { isEmpty } from "./outils";
import "./ProductListe.css";

const GetProductListe = () => {
  /*   const { categoryFilter } = useParams(); // Extrait le paramètre "category" de l'URL
   */

  const categoryFilter = useSelector((state) => state.filterReducer);
  const products = useSelector((state) => state.productReducer.products);
  console.log(categoryFilter);

  // Utilisez le paramètre "category" pour filtrer les produits
  const filteredProducts =
    categoryFilter !== "allArticles"
      ? products.filter((product) => product.categories === categoryFilter)
      : products;
  console.log(filteredProducts);

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
