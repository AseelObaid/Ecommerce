import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { ShopContext } from "../Context/ShopContext.jsx";

const SignUP = () => {
  const [statsErr, setStatsErr] = useState(''); // لحفظ رسالة الخطأ
const {navigate}=useContext(ShopContext)
  const Schema = Yup.object({
    userName: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(20, "Maximum 20 characters"),
  
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
  
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, and one number"
      )
  });

  let formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: ''
    },
    validationSchema: Schema,
    onSubmit: sendRegisterData,
  });

  async function sendRegisterData(values) {
    let { data } = await axios.post("https://ecommerce-node4.onrender.com/auth/signup", values).catch((err) => {
      if (err.response) {
        // تحديد رسالة الخطأ بناءً على الحالة
        if (err.response.status === 409) {
          setStatsErr('Conflict: The email is already registered.');
        } else {
          setStatsErr('An unexpected error occurred. Please try again.');
        }
      } else if (err.request) {
        setStatsErr('No response from the server. Please check your connection.');
      } else {
        setStatsErr('Error: Unable to complete the request.');
      }
    });

    if (data.message === 'success') {
      setStatsErr('');
      navigate('/login')
    } else {
      console.log(data);
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center w-[90%] max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* حقل الاسم */}
      <input
        type='text'
        name='userName'
        className={`w-full px-3 py-2 border ${formik.touched.userName && formik.errors.userName ? 'border-red-500' : 'border-gray-800'}`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        placeholder="Name"
      />
      {formik.touched.userName && formik.errors.userName && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.userName}</p>
      )}

      {/* حقل البريد الإلكتروني */}
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

      {/* حقل كلمة المرور */}
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

      {/* رابط تسجيل الدخول */}
      <div className="w-full flex justify-end text-sm mt-[-8px]">
        <Link to='/login' className="cursor-pointer">Login Hero</Link>
      </div>

      {/* عرض خطأ حالة HTTP */}
      {statsErr && <p className="text-red-600 text-sm">{statsErr}</p>}

      {/* زر التسجيل */}
      <button type='submit' className="bg-black text-white px-7 py-3 font-light mt-4">Sign Up</button>
    </form>
  );
};

export default SignUP;
