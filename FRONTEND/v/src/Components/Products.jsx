import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductaction } from "../REDUX/ACTION/products";
import { toast, Toaster } from "sonner";
import { addtocartaction } from "../REDUX/ACTION/cart";
import {Link} from "react-router-dom"
function Products() {
  const dispatch = useDispatch();

  // Selectors to get state values
  const products = useSelector((state) => state.myproduct.products);
  const isLoading = useSelector((state) => state.myproduct.isloading);
  const success = useSelector((state) => state.myproduct.success);
  const failure = useSelector((state) => state.myproduct.failure);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchproductaction());
  }, [dispatch]);

  // Toast notifications for success and failure messages
  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch({ type: "CLEAR_PRODUCT_SUCCESS" }); // Add an action to clear success after showing the toast
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: "CLEAR_PRODUCT_FAILURE" }); // Add an action to clear failure after showing the toast
    }
  }, [failure, dispatch]);

// In your component, for example in Products.jsx
const handleAddToCart = (product) => {

  dispatch(addtocartaction(product._id, 1, product.productprice,product.productthumbnail));
// Pass quantity as 1 or the desired amount
};
//GAUTAM s ggggggggggggggggggggggg

  return (
    <div>
      <Toaster richColors position="bottom-right" />

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="card m-3" style={{ width: "18rem" }} key={item.productid}>
              <img src={item.productthumbnail} className="card-img-top" alt={item.producttitle} />
              <div className="card-body">
                <h5 className="card-title">{item.productname}</h5> {/* Match with your product data */}
                <p className="card-text">Price: ${item.productprice}</p>
                <p className="card-text">Rating: {item.productrating}</p>
                <p className="card-text">Category: {item.productcategory}</p>
                
               <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(item)}
                  //  disabled={isInCart(product.id)}
                >
                  {/* {isInCart(product.id)? 'in cart':'add to cart'} */}
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
