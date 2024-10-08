import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext.jsx"
import { useLocation } from "react-router-dom"

const Search = () => {

    const {showsearch,setShowsearch,search,setSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation()

    useEffect(()=>{
    if(location.pathname.includes('collection'))
    {setVisible(true)

    }else{
      setVisible(false)
    } },[location])
  return showsearch && visible?(
    <div className="border-t border-b  text-center">
   <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
     <input  value={search} onChange={(e)=>setSearch(e.target.value)}    className="flex-1 outline-none bg-inherit" type ="text " placeholder="Search" /><i className=" w-4  text-gray-600 fa-solid fa-magnifying-glass"></i>
   </div>
   <div className="inline w-3 cursor-pointer" onClick={() => setShowsearch(false)}>
  <i  className="fa-solid fa-xmark"></i>
</div>



    </div>
  ):null
}

export default Search
