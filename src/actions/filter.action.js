export const SET_FILTER = "SET_FILTER";

export const setFilter = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_FILTER,
      payload: data,
    });
  };
};
