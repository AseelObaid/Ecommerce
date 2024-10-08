import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  const currency = '$';
  const delivery_fee = 10;
 const [user,setUser]=useState(null)
  const [search, setSearch] = useState('');
  const [showsearch, setShowsearch] = useState(false);
  const [cartItem, setcartItem] = useState({});
  const navigate=useNavigate();
  
const logOut=()=>{
  localStorage.removeItem('userToken');
  setUser(null);
  navigate('/login')
}
  const addToCart = async (itemid, size) => {
    let cartData = structuredClone(cartItem);

    if (!size) {
      toast.error("Select Product Size", { autoClose: 2000 });
      return;
    }

    if (cartData[itemid]) {
      if (cartData[itemid][size]) {
        cartData[itemid][size] += 1;
      } else {
        cartData[itemid][size] = 1;
      }
    } else {
      cartData[itemid] = {};
      cartData[itemid][size] = 1;
    }

    setcartItem(cartData);
    localStorage.setItem('cartData', JSON.stringify(cartData));

    toast.success("Product added to cart successfully!", { autoClose: 2000 });
  };

  const savecurrentUser=()=>{
   let token=localStorage.getItem('userToken')
    let decoded=jwtDecode(token)
       setUser(decoded)
  }
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      savecurrentUser()
    }
  },[])

  const getCartCount = () => {
    let totalcount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalcount += cartItem[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalcount;
  };
const getCartAmount=()=>{
  let totalAmount=0
  for(const items in cartItem){
    const prod=products.find((produt)=>produt._id==items)
    for(const item in cartItem[items]){
      try{
if(cartItem[items][item]>0)
{
     totalAmount+=prod.price*cartItem[items][item]
}
      }catch(error)
      {console.log(error)}
    }
  }
  return totalAmount
}
  const Updatequantity = (itemid, size, quantity) => {
    let cartData = structuredClone(cartItem);

    if (quantity <= 0) {
      delete cartData[itemid][size];  // حذف الحجم من المنتج
      if (Object.keys(cartData[itemid]).length === 0) {
        delete cartData[itemid];  // حذف المنتج بأكمله إذا كانت الكمية صفر
      }
    } else {
      cartData[itemid][size] = quantity;
    }

    setcartItem(cartData);
    localStorage.setItem('cartData', JSON.stringify(cartData)); // تحديث localStorage
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cartData');
    if (storedCart && storedCart !== 'undefined') {
      setcartItem(JSON.parse(storedCart));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowsearch,
    cartItem,
    addToCart,user,
    getCartCount,savecurrentUser,
    Updatequantity,getCartAmount,navigate,logOut
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
