import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../actions/product.action";

const EditProduct = ({ product, onCancel }) => {
  const dispatch = useDispatch();

  const [updatedProduct, setUpdatedProduct] = useState({
    title: product.title,
    description: product.description,
    categories: product.categories,
    basePrice: product.basePrice,
    salePrice: product.salePrice,
    imageUrl: product.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product.id, updatedProduct));
    onCancel();
  };

  return (
    <div>
      <h2>Modifier un produit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={updatedProduct.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Catégories :</label>
          <input
            type="text"
            id="categorie"
            name="categorie"
            value={updatedProduct.categories}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Prix de base :</label>
          <input
            type="text"
            id="basePrice"
            name="basePrice"
            value={updatedProduct.basePrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Prix soldé :</label>
          <input
            type="text"
            id="salePrice"
            name="salePrice"
            value={updatedProduct.salePrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Image :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={updatedProduct.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onCancel}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
