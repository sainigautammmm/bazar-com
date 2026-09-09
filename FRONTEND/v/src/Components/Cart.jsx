
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcartaction,removefromcartaction } from "../REDUX/ACTION/cart";

function Cart() {

  const dispatch = useDispatch();

  const cartitems = useSelector(
    (state) => state.mycart.cartitems
  );

  useEffect(() => {
    dispatch(fetchcartaction());
  }, [dispatch]);


  console.log("CART ITEMS:", cartitems);


  const handleRemove = (id) => {
  dispatch(removefromcartaction(id));
};


  return (
    <div className="container my-4">

      <h1 className="text-center mb-4">
        Your Shopping Cart
      </h1>


      {cartitems.length === 0 ? (

        <div className="alert alert-warning">
          Cart is empty
        </div>

      ) : (

        <div className="row">

          {cartitems.map((item, index) => (

            <div
              className="col-md-4"
              key={item._id}
            >

              <div className="card mb-4 shadow-sm">

                <img
                  src={item.productThumbnail}
                  className="card-img-top"
                  alt="product"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Product
                  </h5>

                  <p className="card-text">
                    Price:
                    <strong> ${item.productPrice}</strong>
                  </p>

                  <p className="card-text">
                    Quantity:
                    <strong> {item.productQuantity}</strong>
                  </p>

                  <button className="btn btn-danger" onClick={()=>handleRemove(item._id)}>
                    Remove
                  </button>

                </div>

                <div className="card-footer">
                  <small className="text-muted">
                    Item {index + 1}
                  </small>
                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Cart;