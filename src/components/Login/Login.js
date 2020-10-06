import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Auth from './useAuth';
import './Login.css';




const Login = () => {
    
    const [returningUser, setReturningUser]=useState(false);
    const {register, handleSubmit, watch, errors}=useForm();
    
    const auth= Auth();
    //console.log(auth.user)
    const handleSignIn =()=>{
        auth.signInWithGoogle()
        .then(res=>{
            
            window.history.back();
        })
    }
    const handleFbSignIn=()=>{
        auth.fbSignIn()
        .then(res=>{
            window.history.back();
        })
    }
    
    
    const onSubmit=data=>{
        
        if(returningUser){
            if(data.email && data.password){
                auth.signIn(data.email, data.password)
            }
        }else{
            if(data.name && data.email && data.password && data.confirm_password){
                auth.signUp(data.email, data.confirm_password, data.name)
            }
        }
    }
    return (
        <div style={{padding:'100px 300px'}} className="container" >
        {
            returningUser ?
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                {
                auth.user != null && <p className="text-danger"> {auth.user.error}</p>
                }
                <div className="form-group">
                    <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email"/>
                    {errors.email && <span className="error">Email is required</span>}
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                    {errors.password && <span className="error">Password is required</span>}
                </div>
                
                <div className="form-group">
                    <button className="checkout  btn btn-danger btn-block" type="submit">Sign In</button>
                </div>
                <div className="option text-center">
                    <label style={{cursor:'pointer'}} className="text-link"  onClick={() => setReturningUser(false)}>Create a new Account</label>
                </div>
            </form>
            :
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                {
                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                }
                <div className="form-group">
                    <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                    {errors.name && <span className="error">Name is required</span>}
                </div>
                <div className="form-group">
                    <input name="email" className="form-control" ref={register({ pattern: /\S+\@\S+\.\S+/, required: true })} placeholder="Email"/>
                    {errors.email && <span className="error">Your email is not valid</span>}
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" ref={register({ pattern: /\d/, min: 8, required: true })} placeholder="Password" />
                    {errors.password && <span className="error">It should be at least 8 character and must have a number character in your password </span>}
                </div>
                <div className="form-group">
                    <input type="password" name="confirm_password" className="form-control" ref={register({
                    validate: (value) => value === watch('password')
                    })} placeholder="Confirm Password" />
                    {errors.confirm_password && <span className="error">Passwords don't match.</span>}
                </div>
                <div className="form-group">
                    <button className=" checkout btn btn-danger btn-block"  type="submit">Sign Up</button>
                </div>
                <div className="option text-center">
                    <label style={{cursor:'pointer'}} className="text-link" onClick={() => setReturningUser(true)}>Already Have an Account</label>
                </div>
                
            </form>
           } 

        
        <div className="container">
          <hr/>  <span style={{marginLeft:'50%',color:'goldenrod',fontSize:'20px',fontWeight:'700'}} >Or</span> <hr/>
        </div>
        <div className="container">
        
                
                <button className="main-btn" onClick={handleSignIn} >Sign in with Google</button>
               <button style={{marginLeft:'140px'}} className="main-btn" onClick={handleFbSignIn} >Sign in with FB </button>
        </div>
    </div>


    );
};

export default Login;