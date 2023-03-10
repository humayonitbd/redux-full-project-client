import { addProductAction } from "../../actions/productAction";
import toast, { Toaster } from "react-hot-toast";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://redux-website-server.vercel.app/addProducts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(addProductAction(product));
      toast.success("Successfully added!!");
    }
  };
};

export default addProductData;
