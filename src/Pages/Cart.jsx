import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useEffect } from "react";
import Title from "../Component/Title.jsx";
import CartTotal from "../Component/CartTotal.jsx";

const Cart = () => {
  const { cartItem, currency, products, Updatequantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempdata = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          });
        }
      }
    }
    setCartData(tempdata);
  }, [cartItem]);

  return (
    <div className="border-t pt-12">
      <div className="3xl mb-3 ">
        <Title title1={'YOUR'} title2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id == item._id);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_2fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border b-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => Updatequantity(item._id, item.size, Number(e.target.value))}
              />
              <div onClick={() => Updatequantity(item._id, item.size, 0)}>
                <i className="cursor-pointer fa-regular fa-trash-can"></i>
              </div>
            </div>
          );
        })}
      </div>


      <div className=" flex justify-end my-20 ">
<div className="w-full sm:w-[450px]">
  <CartTotal />
  <div className="w-full  text-end">
<button onClick={()=>navigate('/placeorder')} className="bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
  </div>
</div>
      </div>
    </div>
  );
};

export default Cart;
