import { GET_PRODUCTS } from "../actions/product.action";
import { ADD_PRODUCT } from "../actions/product.action";

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
}
