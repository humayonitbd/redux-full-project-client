import { ADD_CONTENT, DELETE_CONTENT, DETAILS_PRODUCT, GET_UPDATE_CONTENT, LOAD_PRODUCT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const loadProduct = (data)=>{
    return{
        type: LOAD_PRODUCT,
        payload: data,
    }
};

export const detailsProductAction = (id)=>{
    return{
        type: DETAILS_PRODUCT,
        payload: id,
    }
}
export const addProductAction = (data)=>{
    return{
        type: ADD_CONTENT,
        payload: data,
    }
}
export const deleteProductAction = (id)=>{
    return{
        type: DELETE_CONTENT,
        payload: id,
    };
}
export const updateSigngleProductAction = (id)=>{
    return{
        type: GET_UPDATE_CONTENT,
        payload: id,
    }
}
export const updateProductAction = (product)=>{
    return{
        type: UPDATE_CONTENT,
        payload: product,
    }
}