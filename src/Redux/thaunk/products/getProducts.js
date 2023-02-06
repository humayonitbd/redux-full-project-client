import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://redux-website-server.vercel.app/allProducts"
    );
    const data = await res.json();

    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default loadProductData;
