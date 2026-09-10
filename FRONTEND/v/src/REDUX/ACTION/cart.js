
import axios from "axios";

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  FETCH_CART_SUCCESS,
} from "../Constant/constants";


export const addtocartaction =
  (productId, productQuantity, productPrice, productThumbnail) =>
  async (dispatch) => {

    dispatch({ type: ADD_TO_CART_REQUEST });

    try {
      const response = await axios.post(
        "https://bazar-com-4.onrender.com/api/cart/addtocart",
        {
          productId: productId,
          productQuantity: productQuantity,
          productPrice: productPrice,
          productThumbnail: productThumbnail,
        }
      );

      console.log("ADD CART RESPONSE:", response.data);

      if (response.data.success) {
        dispatch({
          type: ADD_TO_CART_SUCCESS,
          payload: response.data.cartitem,
        });
      }
    } catch (error) {
      console.log("ADD CART ERROR:", error.response?.data || error);

      const message =
        error.response?.data?.message ||
        "An error occurred while adding to cart.";

      dispatch({
        type: ADD_TO_CART_FAILURE,
        payload: message,
      });
    }
  };


export const fetchcartaction = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://bazar-com-4.onrender.com/api/cart"
    );

    console.log("CART DATA:", response.data);

    if (response.data.success) {
      dispatch({
        type: FETCH_CART_SUCCESS,
        payload: response.data.cartitems,
      });
    }
  } catch (error) {
    console.log(
      "FETCH CART ERROR:",
      error.response?.data || error
    );
  }
};


export const removefromcartaction = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://bazar-com-4.onrender.com/api/cart/${id}`
    );

    console.log("REMOVE CART RESPONSE:", response.data);

    if (response.data.success) {
      dispatch({
        type: "REMOVE_FROM_CART_SUCCESS",
        payload: id,
      });
    }

  } catch (error) {
    console.log(
      "REMOVE CART ERROR:",
      error.response?.data || error
    );
  }
};