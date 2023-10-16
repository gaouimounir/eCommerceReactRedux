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
    price: 0,
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({
      title: "",
      description: "",
      price: 0,
      imageUrl: "",
    });
  };

  return (
    <div className="add-product-container">
      <h2>Ajouter un nouveau produit :</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Titre :</label>
          <input
            type="text"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Description :</label>
          <textarea
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Prix :</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>URL de l'image :</label>
          <input
            type="text"
            value={newProduct.imageUrl}
            onChange={(e) =>
              setNewProduct({ ...newProduct, imageUrl: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submit-button">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
