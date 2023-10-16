import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/product.action";

const GetProductListe = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Liste des produits :</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Prix : {product.salePrice} €</p>
        </div>
      ))}
    </div>
  );
};

export default GetProductListe;
