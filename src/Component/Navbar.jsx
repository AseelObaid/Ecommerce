import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logg.png'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';
const Navbar = () => {
    const [visible,setVisible]=useState(false)
    const {showsearch,setShowsearch,getCartCount,user,logOut}=useContext(ShopContext)
   
    return (
      <div className=' flex font-medium items-center justify-between text-gray-700'>
    <Link to='/'><img src={logo} className='w-36 ' alt="logo_img" /></Link>  
     
      <ul className='hidden sm:flex justify-center items-center gap-5 text-small'>
   <NavLink to='/' className='flex flex-col  items-center '>
   <p>HOME</p>
   <hr className='border-none w-2/4 bg-gray-400 h-[1.5px] hidden ' />
 </NavLink>
 <NavLink  to='/about' className='flex flex-col  items-center '>
   <p>ABOUT</p>
   <hr className='border-none w-2/4 bg-gray-400 h-[1.5px] hidden ' />
 </NavLink>
 <NavLink  to='/collection'className='flex flex-col  items-center '>
   <p>COLLECTION</p>
   <hr className='border-none w-2/4 bg-gray-400 h-[1.5px] hidden  ' />
 </NavLink>
 <NavLink to='/contact'  className='flex flex-col  items-center '>
   <p>CONTACT</p>
   <hr className='border-none w-2/4 bg-gray-400 h-[1.5px] hidden ' />
 </NavLink>
      </ul>
      <div className='flex  items-center gap-8'> 
<div onClick={() =>setShowsearch(!showsearch)}>   <i className="fa-solid fa-magnifying-glass cursor-pointer"></i></div>
    


     
     {user?<p onClick={()=>logOut()}><i className="fa-solid fa-right-from-bracket w-4 cursor-pointer"></i></p>:<Link  to="/login"> <i className=" w-4 fa-regular fa-user cursor-pointer"></i></Link>
     } 
         <Link to='/cart'  className='relative'>
         <i className="  w-4 fa-solid fa-cart-plus"></i> 
         <p className=' absolute right-[-5px] bottom-[-6px] w-4 leading-4 text-[8px] bg-red-500 text-white aspect-square rounded-full text-center'>{getCartCount()}</p>
         </Link>
         <div onClick={() => setVisible(true)}><i className="w-4 sm:hidden fa-solid fa-bars"></i></div>
      </div>

      <div className={`absolute top-0 bottom-0 right-0 bg-white transition-all ${visible ? 'max-w-full' : 'max-w-0'} overflow-hidden`}>

        
      <div className='flex flex-col text-gray-600 cursour-pointer '>
        <div  onClick={()=>setVisible(false)} className='flex  items-center py-3 gap-3  pl-6'>
        <p>Back</p>
        <i className=" pt-[1.5px] fa-solid fa-chevron-left"></i>
       
        </div>
        <NavLink onClick={()=>setVisible(false)}  to='/'className=' py-2 border cursour-pointer pl-6' >HOME</NavLink>
        <NavLink  onClick={()=>setVisible(false)}  to='/about'className=' py-2 border cursour-pointer  pl-6'>ABOUT</NavLink>
        <NavLink  onClick={()=>setVisible(false)}  to='/collection'className=' py-2 border cursour-pointer  pl-6'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)}  to='/contact'className=' py-2 border cursour-pointer  pl-6'>CONTACT</NavLink>
    
       
        </div>
      </div>
       
      </div>
    );
  }
  
  export default Navbar;
  