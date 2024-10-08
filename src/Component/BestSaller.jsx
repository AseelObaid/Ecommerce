import  { useContext, useEffect, useState } from 'react'

import { ShopContext } from '../Context/ShopContext.jsx'
import Title from './Title.jsx'
import ProductItem from './ProductItem.jsx'

const BestSaller = () => {
     const {products} =useContext(ShopContext)
     const[bestsaller,setBestsaller]=useState([]);

     useEffect(()=>{
        const best=products.filter((item)=>(item.bestseller))
setBestsaller(best.slice(0,5))
     },[])
  return (
    <div className='py-10'>

        <div className=' py-8 text-3xl text-center'>
      <Title title1={'BEST'} title2={'SALLER'} />
      <p className='text-xs sm:text-sm md:text-base text-gray-600 w-3/4 m-auto '>Explore our Best Sellers collection, featuring the most popular and top-rated items that our customers love</p>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-7'>
{
    bestsaller.map((item,index)=>(
        <ProductItem  key={index} id={item._id} image={item.image} name={item.name } price ={item.price} />
    ))
}
    </div>
    </div>
    
  )
}

export default BestSaller
