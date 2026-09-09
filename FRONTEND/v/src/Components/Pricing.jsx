import React from "react";
import { useSelector } from "react-redux";

function Pricing() {

  const cartitems = useSelector(
    (state) => state.mycart.cartitems
  );

  const subtotal = cartitems.reduce(
    (total, item) =>
      total + item.productPrice * item.productQuantity,
    0
  );

  const delivery = 0;

  const total = subtotal + delivery;


  return (
    <div className="container my-5">

      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Bill / Pricing
        </h2>

        {cartitems.length === 0 ? (

          <div className="alert alert-warning text-center">
            No products in cart
          </div>

        ) : (

          <>
            {cartitems.map((item) => (

              <div
                key={item._id}
                className="d-flex justify-content-between border-bottom py-3"
              >

                <div>
                  <h5>Product</h5>

                  <p className="mb-0">
                    ₹{item.productPrice} × {item.productQuantity}
                  </p>
                </div>

                <strong>
                  ₹{item.productPrice * item.productQuantity}
                </strong>

              </div>

            ))}


            <div className="mt-4">

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Delivery</span>
                <strong className="text-success">
                  FREE
                </strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <h4>Total</h4>
                <h4>₹{total}</h4>
              </div>

            </div>


            <button className="btn btn-success w-100 mt-4">
              Proceed to Checkout
            </button>

          </>

        )}

      </div>

    </div>
  );
}

export default Pricing;