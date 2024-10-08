import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);
  return (
    <Link  className='text-gray-700' to={`/product/${id}`} >

    <div  className='overflow-hidden'>

        <img className='hover:scale-110 transition ease-in-out'  alt={name} src={image[0]}></img>
    </div>
    <p className='pt-3 pb-1 text-small'>{name}</p>
    <p className='text-sm font-meduim'> {currency}{price}</p>
    </Link>
  )
}

export default ProductItem
