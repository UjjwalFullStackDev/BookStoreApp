import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[600px]">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">

                    <h1 className="font-bold text-2xl">Contact</h1>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br />
                        <input type="text" name="" id="" placeholder='Enter Your Full Name' className='w-4/5 px-3 py-1 border rounded-md outline-none'
                            {...register("name", { required: true })} /><br />
                        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type="email" name="" id="" placeholder='Enter Your Email' className='w-4/5 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })} /><br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* {password} */}
                    <div className='mt-4 space-y-2'>
                        <span>Messege</span><br />
                        <textarea type="textarea" name="" id="" placeholder='Enter Your Messege Here' rows="4" cols="50" className='w-4/5 px-3 py-1 border rounded-md outline-none'
                            {...register("textarea", { required: false })} /><br />
                    </div>
                    {/* iButton*/}
                    <div className='mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact