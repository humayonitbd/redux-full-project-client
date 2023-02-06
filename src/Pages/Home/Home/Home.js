import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDetails from '../../../components/CartDetails';
import loadProductData from '../../../Redux/thaunk/products/getProducts';

const Home = () => {
    
    const products = useSelector((state)=> state.products.products);
    console.log(products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadProductData());
    },[])
    console.log(products)
    return (
        <div className='grid w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
            {
                products?.length ? <>{
                    products?.map(product => <CartDetails key={product._id} product={product}></CartDetails>)
                }</>: <><div>Loading....</div></>
            }
            
        </div>
    );
};

export default Home;