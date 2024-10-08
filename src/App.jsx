import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Navbar from './Component/Navbar.jsx'; 
import About from "./Pages/About.jsx";
import Contactus from "./Pages/Contactus.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from "./Pages/Collection.jsx";
import Search from './Component/Search.jsx'; 
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import SignUP from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import ProtectedRouting from "./Component/ProtectedRouting.jsx";

const App = () => {
  return (
    <div className="px-4 sm:px-[4vw] md:px-[5vw] lg:px-[9vw] ">
      <ToastContainer />
      <Navbar /> 
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/placeorder" element={<ProtectedRouting><PlaceOrder /></ProtectedRouting>} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        </Routes> 
    </div>
  );
}

export default App;
