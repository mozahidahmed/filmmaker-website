import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Social = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
       
       errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
       
      }


      if(user){
       navigate('/blog');
      }



    return (
        <div>
            
        <button onClick={()=>signInWithGoogle()} className='btn button button1'> Google Signup</button><br></br>
        {
            errorElement
        }
        </div>
    );
};

export default Social;