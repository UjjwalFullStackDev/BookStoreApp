import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='dark:bg-slate-900 dark:text-black'>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">LogIn</h3>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email" name="" id="" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })} /><br/>
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* {password} */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type="password" name="" id="" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })} /><br/>
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* iButton*/}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>LogIn</button>
                            <p>Note registered?{" "}<Link to="/signup" className='underline text-blue-500 cursor-pointer'> SignUp</Link>{" "}</p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login