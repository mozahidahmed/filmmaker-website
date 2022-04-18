import React from 'react'
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';
import Social from '../Social/Social';


const Signup = () => {
    const navigate=useNavigate();
    //step.......1
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{useSendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);



//login page a gawa
const  navigateLogin=event=>{
navigate('/login')
}

const handleSignup=async (event)=>{
    event.preventDefault();
    const displayName=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    
    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName});
    alert('Updated profile');
}

if(user){
    navigate('/blog')
}

    return (
<>
<h1>Signup</h1>
            <Form onSubmit={handleSignup}>
        <div className='container mt-3'>
        <input className='input mb-2' type="name" name="name" id=""  placeholder='name'/><br></br>
        <input className='input mb-2' type="email" name="email" id=""  placeholder='email'/><br></br>
        <input className='input' type="password" name="password" id=""  placeholder='password'/><br></br>
        <button className='btn button'>SignUp</button>
         <br></br>

        <div className='d-flex align-items-center'>
        <div style={{height:"2px"}} className='bg-dark w-50 h-1 mt-1'></div>
        <p className='m-1'>OR</p>
        <div style={{height:"2px"}} className='bg-dark w-50 h-1 mt-1'></div>
        </div>
         <Social></Social>
         <p> have a account?..<span className='text-primary' onClick={navigateLogin}>Login</span></p>
        
        </div>

                
            </Form>





</>
        
    )
};

export default Signup;