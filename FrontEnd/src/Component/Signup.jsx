import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) => {
        const userInfo = {
            fullname:data.fullname,
            email_id:data.email_id,
            password:data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('SignUp Successfully');
                navigate(from, {replace: true});

            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
            
        }).catch ((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error: "+ err.response.data.message);
            }
            
        })
    }
    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-black'>
            <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">SignUp</h3>
                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br />
                            <input type="text" placeholder='Enter Your Full Name' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("fullname", { required: true })} /><br/>
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email_id" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email_id", { required: true })} /><br/>
                            {errors.email_id && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* {password} */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })} /><br/>
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* iButton*/}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                            <p>Have an account already?<span className='underline text-blue-500 cursor-pointer'
                                onClick={() => document.getElementById('my_modal_3').showModal()}> LogIn</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup