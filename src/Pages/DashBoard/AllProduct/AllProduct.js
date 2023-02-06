import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductAction, updateProductAction, updateSigngleProductAction } from '../../../Redux/actions/productAction';
import deleteProductData from '../../../Redux/thaunk/products/deleteProduct';
import loadProductData from '../../../Redux/thaunk/products/getProducts';

const AllProduct = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadProductData())

    },[])
    console.log(products)
    return (
        <div className=''>
          
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product-Image</th>
        <th>Model</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {products.map(product => <tr key={product._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.brand}</div>
              
            </div>
          </div>
        </td>
        <td>
         {product.model}
        </td>
        <td>{product.price}</td>
        <th>
          <Link to={`/Dashboard/updateProduct/${product
          ._id}`}><button onClick={()=> dispatch(updateSigngleProductAction(product._id))} className="btn btn-primary mr-2">Edit</button></Link>
          <button onClick={()=> dispatch(deleteProductData(product._id))} className="btn bg-red-600 ">Delete</button>
        </th>
      </tr>)}
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllProduct;