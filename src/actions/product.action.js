import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

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

export const addProduct = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/products", data).then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    });
  };
};

export const updateProduct = (productId, updatedProductData) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/products/${productId}`, updatedProductData)
      .then((res) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: res.data,
        });
      });
  };
};
