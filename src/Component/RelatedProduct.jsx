import { useContext, useEffect, useState } from "react"
import { products } from "../assets/assets.js"
import { ShopContext } from "../Context/ShopContext.jsx"
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";


const RelatedProduct = ({category,subcategory}) => {
     const {products}=useContext(ShopContext);
     const [related,setRelated]=useState([]);
useEffect(()=>{
if(products.length>0){
    let copyProduct=products.slice();
    copyProduct=copyProduct.filter((item)=>item.category===category);
    copyProduct=copyProduct.filter((item)=>item.subcategory===subcategory);
  setRelated(copyProduct.slice(0,5))
}
},[products])
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title title1={'Related'} title2={'Products'} />

      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-7'>
{
    related.map((item,index)=>(
        <ProductItem  key={index} id={item._id} image={item.image} name={item.name } price ={item.price} />
    ))
}
    </div>
    </div>
  )
}

export default RelatedProduct
