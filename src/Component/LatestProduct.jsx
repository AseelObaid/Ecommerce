import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'
import Title from './Title.jsx'


const LatestProduct = () => {
    const {products}=useContext(ShopContext);
    const[latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
setLatestProduct(products.slice(0,10))
    },[])
  
  return (
    <div className='py-10'>
    <div className='text-center py-8 text-3xl'>
       <Title title1={'LATEST'} title2={'COLLECTION'} />
      <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our latest collection of fashion that brings a touch of elegance and modernity to your wardrobe. </p>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-7'>
{latestProduct.map((item,index)=>(
    <ProductItem  key={index} id={item._id} image={item.image} name={item.name } price ={item.price} />
))}


    </div>
    </div>
  )
}

export default LatestProduct
