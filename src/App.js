import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./actions/product.action";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Liste des produits :</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Prix : {product.salePrice} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
