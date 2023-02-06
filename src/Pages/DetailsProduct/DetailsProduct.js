import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BiListPlus } from 'react-icons/bi';
import DetailsProductCart from './DetailsProductCart';

const DetailsProduct = () => {
    const productDetails = useSelector(state => state.products.detailsProducts)
    console.log(productDetails); 
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    return (
        <div>
            {productDetails.map(product =><DetailsProductCart key={product._id} product={product}></DetailsProductCart> )}
        </div>
    );
};

export default DetailsProduct;