// const Cart = require("../MODEL/cart");


// const addtocart = async (req,res)=>{
   
//      try {
//         const {productid,productquantity,productprice,productthumbnail,} = req.body;
//         if (!productid || productquantity == null || productprice == null || productthumbnail ) {
//          return res.status(400).json({
//              success: false,
//              message: "productid, productquantity, and productprice are required",
//          });
//      }
//          let cartitem = await Cart.findOne({productid});

//          console.log(cartitem);

//          if (cartitem) {
//             cartitem.productquantity += productquantity;
//             await cartitem.save();
//           return res.status(200).json({
//                success:true,
//                message: "product quantity updated in cart",
//                cartitem,
//             });
//          }
//         else{
//             cartitem = new Cart({productid,productquantity,productprice,productthumbnail});
//             await cartitem.save();
//           return  res.status(200).json({
//                success:true,
//                message:"product added to cart",
//                cartitem,
//             });
//         }

//      } catch (error) {
            
//          return res.status(500).json({
//             success:false,
//             message:error.message,

//          });
//      }

// };

// module.exports = {addtocart};









const Cart = require("../MODEL/cart");

const addtocart = async (req, res) => {
  try {
    const {
      productId,
      productQuantity,
      productPrice,
      productThumbnail,
    } = req.body;

    if (
      !productId ||
      productQuantity == null ||
      productPrice == null ||
      !productThumbnail
    ) {
      return res.status(400).json({
        success: false,
        message:
          "productId, productQuantity, productPrice and productThumbnail are required",
      });
    }

    let cartitem = await Cart.findOne({ productId });

    if (cartitem) {
      cartitem.productQuantity += Number(productQuantity);

      await cartitem.save();

      return res.status(200).json({
        success: true,
        message: "Product quantity updated in cart",
        cartitem,
      });
    }

    cartitem = new Cart({
      productId,
      productQuantity,
      productPrice,
      productThumbnail,
    });

    await cartitem.save();

    return res.status(200).json({
      success: true,
      message: "Product added to cart",
      cartitem,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getcart = async (req, res) => {
  try {
    const cartitems = await Cart.find();

    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cartitems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




const removefromcart = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product removed from cart",
      id: id,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addtocart,
  getcart,
  removefromcart,
};