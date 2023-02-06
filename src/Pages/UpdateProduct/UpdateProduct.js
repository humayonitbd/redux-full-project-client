import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import updateProductData from '../../Redux/thaunk/products/updateProduct';
import toast, { Toaster } from 'react-hot-toast';

const UpdateProduct = () => {
    const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const productData = useSelector(state => state.products.products);
  console.log(productData)
  const {model, image, price, brand, _id} = productData;

  const submit = (data) => {
    
    const product = {
        productId: _id,
      model: data.model,
      image: data.image,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      price: data.price,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [],
    };

    console.log(product);
    dispatch(updateProductData(product));

  };

  return (
    <div>
        <h3 className='text-center text-red-600 my-10 font-bold text-2xl'>Update Product</h3>
        <div className='flex justify-center items-center h-full '>
        
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Model
          </label>
          <input type='text' className='border py-2 border-black rounded' id='model' defaultValue={model} {...register("model")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' defaultValue={image} className='border py-2 border-black rounded' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select name='brand' defaultValue={brand} className='border py-2 border-black rounded' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Price
          </label>
          <input type='text' defaultValue={price} className='border py-2 border-black rounded' name='price' id='price' {...register("price")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                className='border py-2 border-black rounded'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                className='border py-2 border-black rounded'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature1'>
            Key Feature 1
          </label>
          <input
            type='text'
            defaultValue={productData.keyFeature[0]}
            name='keyFeature1'
            className='border py-2 border-black rounded'
            id='keyFeature1'
            {...register("keyFeature1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature2'>
            Key Feature 2
          </label>
          <input
            type='text'
            defaultValue={productData.keyFeature[1]}
            name='keyFeature2'
            className='border py-2 border-black rounded'
            id='keyFeature2'
            {...register("keyFeature2")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature3'>
            Key Feature 3
          </label>
          <input
            type='text'
            defaultValue={productData.keyFeature[2]}
            name='keyFeature3'
            className='border py-2 border-black rounded'
            id='keyFeature3'
            {...register("keyFeature3")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature4'>
            Key Feature 4
          </label>
          <input
            type='text'
            defaultValue={productData.keyFeature[3]}
            name='keyFeature4'
            className='border py-2 border-black rounded'
            id='keyFeature4'
            {...register("keyFeature4")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
           
          >
            update product
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateProduct;