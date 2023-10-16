import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/product.action";
import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    categories: "",
    basePrice: "",
    salePrice: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addProduct(newProduct));
      // Réinitialisez le formulaire après avoir ajouté le produit
      setNewProduct({
        title: "",
        description: "",
        categories: "",
        basePrice: "",
        salePrice: "",
        imageUrl: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!newProduct.title) {
      errors.title = "Le titre est requis";
      isValid = false;
    }

    if (!newProduct.description) {
      errors.description = "La description est requise";
      isValid = false;
    }

    if (!newProduct.categories) {
      errors.categories = "Les catégories sont requises";
      isValid = false;
    }

    if (isNaN(newProduct.basePrice) || newProduct.basePrice <= 0) {
      errors.basePrice = "Le prix de base doit être un nombre positif";
      isValid = false;
    }

    if (isNaN(newProduct.salePrice) || newProduct.salePrice <= 0) {
      errors.salePrice = "Le prix soldé doit être un nombre positif";
      isValid = false;
    }

    if (!newProduct.imageUrl) {
      errors.imageUrl = "L'URL de l'image est requise";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div>
      <h2>Ajouter un nouveau produit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <label htmlFor="categories">Catégories :</label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={newProduct.categories}
            onChange={handleChange}
          />
          {errors.categories && <p>{errors.categories}</p>}
        </div>
        <div>
          <label htmlFor="basePrice">Prix de base :</label>
          <input
            type="number"
            id="basePrice"
            name="basePrice"
            value={newProduct.basePrice}
            onChange={handleChange}
          />
          {errors.basePrice && <p>{errors.basePrice}</p>}
        </div>
        <div>
          <label htmlFor="salePrice">Prix soldé :</label>
          <input
            type="number"
            id="salePrice"
            name="salePrice"
            value={newProduct.salePrice}
            onChange={handleChange}
          />
          {errors.salePrice && <p>{errors.salePrice}</p>}
        </div>
        <div>
          <label htmlFor="imageUrl">URL de l'image :</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleChange}
          />
          {errors.imageUrl && <p>{errors.imageUrl}</p>}
        </div>
        <button type="submit">Ajouter le produit</button>
      </form>
    </div>
  );
};

export default AddProduct;
