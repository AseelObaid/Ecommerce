import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import RelatedProduct from "../Component/RelatedProduct.jsx";

const Product = () => {
    const {productId} =useParams();
   const  {products,currency,addToCart}=useContext(ShopContext);
   const [productData,setProductData]=useState(false)
   const [image,setImage]=useState('')
    const [size,setSize]=useState('')
   const FetchProductData=()=>{

    products.find((item)=>{
       
    if(item._id == productId)
    {
    setImage(item.image[0])
   
    setProductData(item)
  
    }
  
    })
   }


   useEffect(()=>{
    FetchProductData();
   },[products,productId])


  return productData ?(
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex flex-col sm:flex-row gap-12">
            <div className="flex flex-1 gap-3 flex-col-reverse sm:flex-row">
                <div className="flex sm:flex-col overflow-x-auto overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
                    {
                        productData.image.map((item, index) => (
                            <img onClick={()=>setImage(item)} src={item} alt={`Product Image ${index}`} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                        ))
                    }
                </div>
                <div className="w-full sm:w-[80%]">
                    <img  src={image}   className="w-full h-auto" alt="" />
                </div>
            </div>
  <div className="flex-1 font-meduim text-xl  mt-2">
<h1 className="text-2xl">{productData.name}</h1>
<div className="flex  items-center  gap-1 mt-2">
<i className="text-orange-600  w-3.5 fa-regular fa-star"></i>
<i className=" text-orange-600 fa-regular fa-star w-3.5"></i>
<i className=" text-orange-600 fa-regular fa-star w-3.5"></i>
<i className=" text-orange-600 fa-regular fa-star w-3.5"></i>
<i className=" text-orange-200 fa-regular fa-star w-3.5"></i>
<p className=" text-xs pl-2  ">(122)</p>
</div>
<p className="text-3xl mt-5 font-medium"> {currency}{productData.price}</p>
<p  className=" md:w-4/5 text-gray-500 mt-5 font-medium">{productData.description}</p>
<div className="flex flex-col gap-4 my-8">
    <p>Select Size</p>
    <div className="flex gap-2">
{
    productData.sizes.map((item,index)=>(
        <button  onClick={()=>{setSize(item)

        }}className={`border bg-gray-100 py-2 px-4 ${item===size?'bg-gray-300':''}`}  key={index}>{item}</button>
    ))
}
    </div>
</div>
<button onClick={()=>{addToCart(productData._id,size)}} className=" bg-black text-white px-8 py-3 text-sm active:bg-gray-700"> ADD TO CART</button>
<hr className="mt-8 sm:w-4/5" />
<div className="flex flex-col gap-1 text-sm  text-gray-500">
<p>100% Original Product</p>
<p> Cash in Delivery is available</p>
<p> Esay Return and Exchange</p>
</div>
</div>
        </div>





<RelatedProduct category={productData.category} subcategory={productData.subcategory} />

    </div>
  ):<div className="opacity-0"> 
 
  </div>
}

export default Product
