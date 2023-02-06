import { loadProduct } from "../actions/productAction";
import { ADD_CONTENT, DELETE_CONTENT, DETAILS_PRODUCT, GET_UPDATE_CONTENT, LOAD_PRODUCT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    detailsProducts:[],
};

const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case LOAD_PRODUCT:
            return{
                ...state,
                products: action.payload,
            };
        case DETAILS_PRODUCT:
            return{
                ...state,
                detailsProducts: [state.products.find(product => product._id === action.payload)],
            };
        case ADD_CONTENT:
            return{
                ...state,
                products: [...state.products, action.payload],
            };
        case DELETE_CONTENT:
            return{
                ...state,
                products: state.products.filter(product => product._id !== action.payload),
            };
        case GET_UPDATE_CONTENT :
            return{
                ...state,
                products: state.products.find(product => product._id === action.payload),
            };
        // case UPDATE_CONTENT :
        //     return{
        //         ...state,
        //         products: state.products.find(product => product._id === action.payload),
        //     };
        default:
        return state;
    }
    
}

export default productReducer;