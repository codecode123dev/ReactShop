import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Account.css'
import { GoogleLogin } from '@react-oauth/google';
import backgr from '../assets/img/backgr.png'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";

const schema = yup
  .object({
    name: yup.string().required('Name is required!'),
    email: yup.string().email('Invalid email').required('Email is required!'),
    password: yup.string().required('Password is required!'),
  })
  .required()
export default function Account(){
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const handelCheckbox = (e) =>{
        setIsChecked(e.target.checked)
      }

    const onSubmit = (data) => {
        if(isChecked === true){
            navigate("/")
            console.log(data)
        }
        else{
            alert('Please checked!')
        }
    }

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };


    return(
        <>
        <div className="grid grid-cols-2 ">
        {/* <div className="container"> */}
            <div className="flex flex-col py-[50px] px-[170px] ">
                <form className="flex flex-col  text-black" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h3 className="text-[32px]">Sign In</h3>
                    </div>
                    <div className="mt-[58px]">
                        <div className="flex flex-col text-[14px]">
                            <label>Name</label>
                            <input 
                            {...register("name")} 
                            type="text" 
                            className="border-[2px] rounded-[5px] border-[#D9D9D9] placeholder:text-[12px]" 
                            id="name" 
                            name="name" 
                            placeholder="Name"/>
                            {
                                <span 
                                className='flex justify-end text-red-500'>
                                    {errors.name?.message}
                                </span>
                            }
                        </div>
                        <div className="flex flex-col text-[14px] mt-[20px]">
                            <label>Email Address</label>
                            <input 
                            {...register("email")}  
                            type="email" 
                            placeholder="Email" 
                            className="border-[2px] rounded-[5px] border-[#D9D9D9] placeholder:text-[12px]" 
                            id="email" 
                            name="email"/>
                            {
                                <span 
                                className='flex justify-end text-red-500'>
                                    {errors.email?.message}
                                </span>
                            }
                        </div>
                        <div className="flex flex-col text-[14px] mt-[20px]">
                            <label>Password</label>
                            <input 
                            {...register("password")} 
                            type="password" 
                            placeholder="Password" 
                            className="border-[2px] rounded-[5px] border-[#D9D9D9] placeholder:text-[12px]" 
                            id="password" 
                            name="password"/>
                                <span
                                className='flex justify-end text-red-500'>
                                    {errors.password?.message}
                                </span>
                        </div>
                        <div className="text-[14px] mt-[20px]">
                            <input onChange={handelCheckbox} checked={isChecked} type="checkbox" className="w-[18px] accent-[#3B82F6]"/>
                            <label>I agree to the <span>terms & policy</span> </label>
                        </div>
                    </div>
                    {/* <div className="text-[14px]"> */}
                    <button className="bg-[#3A5B22] rounded-[5px] text-[14px] mt-[10px]" type="submit" >Submit</button>
                    {/* </div> */}
                    <div className='my-[40px]'>
                        <div className='border-[#E7E5E4] border-[1px] w-[148px] inline-block mb-[4px] '></div>
                        <span className='mx-[8px] text-black text-[12px]'>Or</span>
                        <div className='border-[#E7E5E4] border-[1px] w-[148px] inline-block mb-[4px] '></div>
                    </div>

                </form>
                <div className="flex flex-row my-[5px]">
                    <div className="">
                        <GoogleLogin  onSuccess={responseMessage} onError={errorMessage} />

                    </div>
                    <button className="border-[1px] rounded-[5px] border-black mt-[2px] w-[100px] text-[12px]">Sign in with Apple</button>
                </div>
                <div className="text-[12px] text-black" >
                    <p className="font-medium">Have an account? <span className="text-[#0F3DDE]  ">Sign In</span></p>
                    {/* <Link className="" to='/'>Back</Link> */}
                </div>

            </div>

            <div className="flex justify-end">
                <img src={backgr} alt="background" style={{ width: '100%', height: '625px' }} />

            </div>

        </div>
        </>
    )
}
