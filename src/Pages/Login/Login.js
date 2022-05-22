import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if(user){
      console.log (user)
    }

    const onSubmit = data => {
      
      console.log(data);}
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl font-bold">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your email?</span>
   
  </label>
  <input type="email" placeholder="your email" class="input input-bordered w-full max-w-xs"
  {...register("email", {
     required: {
       value: true,
       message: 'Email is Required'
     },


    pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
     message: 'provide a valid email' 
     }
  })} />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
      
    
 
  </label>
</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
   
  </label>
  <input type="password" placeholder="your password" class="input input-bordered w-full max-w-xs"
  {...register("password", {
     required: {
       value: true,
       message: 'password is Required'
     },


    minLength: { value: 6, message: 'Must be 6 characters or longer'  }
  })} />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.minLength?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
      
    
 
  </label>
</div>
      
      <input className='btn w-full max-w-xs text-white' type="submit" value="Login"/>
    </form>
    <div className="divider">OR</div>
    <button onClick={() =>signInWithGoogle()} className="btn btn-accent">Continue with Google</button>
    
    
  </div>
</div>
        </div>
    );
};

export default Login;