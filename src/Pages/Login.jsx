import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import * as Yup from 'yup';
import { ShopContext } from "../Context/ShopContext.jsx";
import { Link } from "react-router-dom";

const Login= () => {
  const [statsErr, setStatsErr] = useState(''); // لحفظ رسالة الخطأ
const {navigate,savecurrentUser}=useContext(ShopContext)
  const Schema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email address"),
  
    password: Yup.string().required("Password is required")
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Schema,
    onSubmit: sendLoginData,
  });

  async function sendLoginData(values) {
    try {
      let { data } = await axios.post("https://ecommerce-node4.onrender.com/auth/signin", values);
      if(data.message=='success'){ 
        localStorage.setItem('userToken',data.token)
     savecurrentUser()
        formik.resetForm();
        navigate('/');
      }
       
    } catch (error) {
      if (error.response && error.response.data) {
        setStatsErr(error.response.data.message || "An error occurred during login");
      } else {
        setStatsErr("An unexpected error occurred");
      }
    }
  
  }return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center w-[90%] max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2">
          <p className="prata-regular text-3xl">Log in</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
  
        {/* عرض رسالة الخطأ الخاصة بالسيرفر مرة واحدة */}
        {statsErr && <p className="text-red-600 text-sm">{statsErr}</p>}
  
        <input
          type='email'
          name='email'
          className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-800'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
  
        <input
          type='password'
          name='password'
          className={`w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-800'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
  
        <div className="flex justify-end w-full">
          <Link to='/signup' className="text-gray-800 text-sm cursor-pointer hover:underline">Create Account</Link>
        </div>
  
        <button type='submit' className="bg-black text-white px-7 py-3 font-light mt-4">Log in</button>
      </form>
    </div>
  );
  
};

export default Login;
