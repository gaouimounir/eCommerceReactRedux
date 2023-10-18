import { GET_PRODUCTS, UPDATE_PRODUCT } from "../actions/product.action";
import { ADD_PRODUCT } from "../actions/product.action";

const initialState = {};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
}

/* export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
 */
