import React,{Fragment} from "react";
import { Link,Navigate } from "react-router-dom";
import {BiUser} from 'react-icons/bi'
import {AiOutlineUnlock} from 'react-icons/ai'
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {LoginPageValidate} from '../helpers/validate'
import { useDispatch,useSelector } from "react-redux";
import {loginUserAPIAsync,selectLoggedInUser} from '../Redux-Toolkit/auth/authSlice'


const LoginC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  const username = user?.username
  const formik = useFormik({
   initialValues:{
    username:"",
    password:"",
   },
   validate:LoginPageValidate,
   validateOnBlur:false,
   validateOnChange:false,
   onSubmit : async(values)=>{
    dispatch(loginUserAPIAsync(values))
   }
  })
  return (
    <Fragment>
         {user && <Navigate to={`/dashboard/${username}`} replace={true}></Navigate>}
    <div className=" mx-auto">
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form action="" onSubmit={formik.handleSubmit}>
        <div className="relative my-4">
          <input type="text" 
          {...formik.getFieldProps("username")}
          className="block w-72 py-2.3 px-0 text-2xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <BiUser className="absolute top-2 right-4"/>
          <label htmlFor="" 
          className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >Your Username</label>
        </div>

        <div className="relative my-4">
          <input type="password"
          {...formik.getFieldProps("password")}
          className="block w-72 py-2.3 px-0 text-2xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <AiOutlineUnlock  className="absolute top-2 right-4"/>

          <label htmlFor=""
          className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Your Password</label>
        </div>
        <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white py-2 transition-colors duration-300">Login</button>
        <div>
            <span className="m-4 text-black">New Here ? <Link to={'/register'} className="text-white">Create an account</Link></span>
        </div>
        </form>
      </div>
    </div>

    </Fragment>
  );
};

export default LoginC;
