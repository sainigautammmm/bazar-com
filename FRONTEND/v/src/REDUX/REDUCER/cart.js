// import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_SUCCESS } from "../Constant/constants";

// const initialstate = {
//     cartitems:[],
//     isloading:false,
//     success:null,
//     failure:null,
// };

// export  const cartreducer = (state=initialstate,action)=>{

//      switch (action.type) {
//         case ADD_TO_CART_REQUEST:
//             return{
//                 ...state,
//                 isloading:true,
//                 success:null,
//                 failure:null
//             }
            
//             case ADD_TO_CART_SUCCESS:
//                 return{
//                     ...state,
//                     isloading:false,
//                     cartitems:[...state.cartitems,action.payload],
//                     success:"products added to cart successfully"
//                 }
     
//              case ADD_TO_CART_FAILURE:
//                 return{
//                     ...state,
//                     isloading:false,
//                     failure:action.payload,
//                 }
          
//         //      case CLEAR_CART_SUCCESS:
//         //         return{
//         //             ...state,
//         //             success:null,
//         //         }
//         // case CLEAR_CART_FAILURE:
//         //     return{
//         //         ...state,
//         //         failure:null,
//         //     }

//         default:
//             return state;
//      }

// }



import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  FETCH_CART_SUCCESS,
} from "../Constant/constants";

const initialstate = {
  cartitems: [],
  isloading: false,
  success: null,
  failure: null,
};

export const cartreducer = (state = initialstate, action) => {
  switch (action.type) {

    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        isloading: true,
        success: null,
        failure: null,
      };


    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isloading: false,
        cartitems: [...state.cartitems, action.payload],
        success: "Product added to cart successfully",
      };


    case FETCH_CART_SUCCESS:
      return {
        ...state,
        isloading: false,
        cartitems: action.payload,
      };


    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        isloading: false,
        failure: action.payload,
      };

      case "REMOVE_FROM_CART_SUCCESS":
  return {
    ...state,
    cartitems: state.cartitems.filter(
      (item) => item._id !== action.payload
    ),
  };


    default:
      return state;
  }
};

