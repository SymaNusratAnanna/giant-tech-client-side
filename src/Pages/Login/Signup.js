import React from 'react';

import {useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => 
    {
        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
        const { register, formState: { errors }, handleSubmit } = useForm();
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);
          const [updateProfile, updating, updateError] = useUpdateProfile(auth);

          const navigate = useNavigate();


    
        let signInError;
    
        if(loading || gLoading| updating){
         return <Loading></Loading>
        }
    
    
        if(error|| gError|| updating){
          signInError=<p>{error?.message ||gError?.message|| updateError?.message}</p>
        }
    
        if(user||gUser){
          console.log (user||gUser);
        }
    
        const onSubmit = async data => {
          
          console.log(data);
         await createUserWithEmailAndPassword(data.email, data.password);
          await updateProfile({displayName: data.name});
          console.log('update done');
          navigate ('/');

        }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="text-center text-2xl font-bold">SignUp</h2>
<form onSubmit={handleSubmit(onSubmit)}>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your Name?</span>
   
  </label>
  <input type="text" placeholder="your name" class="input input-bordered w-full max-w-xs"
  {...register("email", {
     required: {
       value: true,
       message: 'Name is Required'
     },


     
  })} />
  <label class="label">
  {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
 
      
    
 
  </label>
</div>
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
 {signInError} 
  <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp"/>
</form>
<p><small>Already have an account? <Link className='text-primary' to="/login"> Please Login</Link></small></p>
<div className="divider">OR</div>
<button onClick={() =>signInWithGoogle()} className="btn btn-accent">Continue with Google</button>


</div>
</div>
    </div>
    );
};

export default Signup;