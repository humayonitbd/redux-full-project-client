import { updateProductAction } from "../../actions/productAction";
import toast, { Toaster } from "react-hot-toast";

const updateProductData = (product) => {
  const { productId } = product;
  delete product.productId;
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://redux-website-server.vercel.app/allProducts/${productId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      dispatch(updateProductAction(product));
      toast.success("Successfully updated!!");
    }
  };
};

export default updateProductData;
