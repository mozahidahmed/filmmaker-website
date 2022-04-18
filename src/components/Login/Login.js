import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';

import auth from '../firebase.init';
import Social from '../Social/Social';
import './Login.css';


const Login = () => {

//console a man dekano
const emailRef=useRef('');
const passwordRef=useRef('');
const navigate=useNavigate();
const location=useLocation();

const from=location.state?.from?.pathname || "/";
//step......1
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);





//handle submit
const handleSubmit=event=>{
  event.preventDefault();
  const email=emailRef.current.value;
  const password=passwordRef.current.value;
  signInWithEmailAndPassword(email, password)
}

//signup page a gawa
const navigateRegister=event=>{
navigate('/signup');
}

// if(user){
//   navigate('/blog');
// }
if(user){
  navigate(from,{replace:true});
}








    return (
       
      <>
      <h1>Login</h1>
       <Form onSubmit={handleSubmit}>

       <div className='container mt-3'>
        <input ref={emailRef} className='input mb-2' type="email" name="email" id=""  placeholder='email'/><br></br>
        <input ref={passwordRef} className='input' type="password" name="password" id=""  placeholder='password'/><br></br>
        <button className='btn button'>Login</button>
         <br></br>

        <div className='d-flex align-items-center'>
        <div style={{height:"2px"}} className='bg-dark w-50 h-1 mt-1'></div>
        <p className='m-1'>OR</p>
        <div style={{height:"2px"}} className='bg-dark w-50 h-1 mt-1'></div>
        </div>

        <Social></Social>
      
         <p>New to a website?.. <span onClick={navigateRegister} className='text-primary'>CreateAccount</span></p>
         Forget Password?<button className='btn text-primary '>Resent password</button>
        </div>
       </Form>

      </>
    );
};

export default Login;