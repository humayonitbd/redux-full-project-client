import { deleteProductAction } from "../../actions/productAction";
import toast, { Toaster } from 'react-hot-toast';

const deleteProductData = (id)=>{
    return async (dispatch, getState) =>{
        const res = await fetch(`http://localhost:5000/allProducts/${id}`,{
            method:"DELETE"
        })
        const data = await res.json();

        if(data.acknowledged){
            dispatch(deleteProductAction(id))
            toast.success('Successfully delete!!')
        }
    }
}

export default deleteProductData;