import { combineReducers } from "redux";
import filterReduser from "./filterReduser";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    products: productReducer,
    filter : filterReduser,
})

export default rootReducer;