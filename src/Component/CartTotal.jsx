import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext.jsx"
import Title from "./Title.jsx"


const CartTotal = () => {
    const{currency,delivery_fee,getCartAmount}=useContext(ShopContext)
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title title1={'CART'} title2={'TOTALS'} />
      </div>
      <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
           <p>Subtotal</p>
           <p>{currency}{getCartAmount()}.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
           <p>Shipping fee</p>
           <p>{delivery_fee}.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
           <p><b>Total</b></p>
           <p>{currency} {getCartAmount()==0?0:getCartAmount()+delivery_fee}.00</p>
          </div>
      </div>
    </div>
  )
}

export default CartTotal
