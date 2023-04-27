import React from 'react'
import { useForm } from 'react-hook-form';


export const Form2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center text-center w-60 mx-auto'>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="password" placeholder="Password" {...register("Password", {required: true})} />
            <input type="submit" />
        </form>
    )
}