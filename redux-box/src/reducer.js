import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  authors: authorReducer
})

export default rootReducer;
