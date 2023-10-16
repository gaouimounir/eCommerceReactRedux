import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getProducts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/products").then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    });
  };
};

export const addProduct = (newProduct) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/products", newProduct)
      .then((res) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data,
        });
      });
  };
};
