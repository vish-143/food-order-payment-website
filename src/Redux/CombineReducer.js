import { combineReducers } from "redux";
import { cartReducer } from "./CartItemReducer";
import { adddItemReducer } from "./AddItemCart";

const rootReducer = combineReducers({showItemcartDetails : cartReducer , showAddItemDetails : adddItemReducer})
export default rootReducer;
// import { combineReducers } from "redux";
// import { homeReducer } from "./Homereducer";
// import { signUpReducer } from "./SignupReducer";

// const  rootReducer = combineReducers({homePageProfile: homeReducer, signupPageProfile: signUpReducer})

// export default rootReducer;