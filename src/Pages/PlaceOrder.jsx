import { useContext, useState } from "react"
import CartTotal from "../Component/CartTotal.jsx"
import Title from "../Component/Title.jsx"
 import mastercard from '../assets/master.png'
import { ShopContext } from "../Context/ShopContext.jsx"
const PlaceOrder = () => {
    const [method,setMethod ]=useState('cod')

  return (
    <div className="flex flex-col sm:flex-row  mt-10 py-9 justify-between">
      <div className="flex flex-col  gap-4 w-full  sm:max-w-[480px]">
           <div className="text-xl sm:text-2xl my">
            <Title title1={'DELIVERY'} title2={'INFORMATION'} />
           </div>
           <div className="flex gap-3">
           <input className=" border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
           <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
           </div>
           <input className=" border border-gray-300 rounded py-1.5 px-3.5 w-full " type="email" placeholder="Enter Your Email" />
           <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
           <div className="flex gap-3">
           <input className=" border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
           <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
           </div>
           <div className="flex gap-3">
           <input className=" border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zip Code" />
           <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
           </div>
           <input className=" border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>










      <div className="mt-8">
<div className="mt-8 min-w-80">
<CartTotal />
</div>
<div className="mt-12"> 
    <Title title1={'PAYMENT'} title2={'METHOD'} />
</div>
<div  className="flex flex-col gap-3 lg:flex-row">
<div onClick={()=>setMethod('VISA')} className=" flex items-center border gap-3  p-2 px-3 cusor-pointer">
<p className={`border min-w-3.5  h-3.5 rounded-full ${method==='VISA'?'bg-green-400':''}`}></p>
<i className=" text-3xl text-blue-800 fa-brands fa-cc-visa"></i>
</div>
<div  onClick={()=>setMethod('master') } className="flex items-center border gap-3  p-2 px-3 cusor-pointer">
<p className={`border min-w-3.5  h-3.5 rounded-full ${method==='master'?'bg-green-400':''}`}></p>
<img  className ="w-10 " src={mastercard} alt="" />
</div>
<div onClick={()=>setMethod('cod') } className="flex items-center border gap-3  p-2 px-3 cusor-pointer ">
<p className={`border min-w-3.5  h-3.5 rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
<p className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</p>
</div>
</div>
<div className=" w-full text-end mt-8">
    <button  className="bg-black text-white px-16 py-3  text-sm">PLACE ORDER</button>
</div>
      </div>
    </div>
  )
}

export default PlaceOrder
