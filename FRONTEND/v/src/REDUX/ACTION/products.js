import axios from "axios";
axios.defaults.withCredentials = true;

import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../Constant/constants";

export const fetchproductaction = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  
  try {
    const response = await axios.get("http://localhost:8000/api/products/all-products");

    console.log(response.data); // Debugging the response to ensure the structure is correct
    
    if (response.data.success) {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: {
          Data: response.data.data, // Assuming `data` contains the list of products
          message: response.data.message,
        },
      });
    } else {
      throw new Error('Failed to fetch products: ' + response.data.message);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    
    const message = error.response?.data?.message || error.message || "An error occurred";
    
    // Enhanced logging to catch any unexpected issues
    console.error('Error details:', message);
    
    dispatch({ type: FETCH_PRODUCT_FAILURE, payload: message });
  }
};
