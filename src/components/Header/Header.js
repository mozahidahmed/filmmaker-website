import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css';




const Header = () => {
    const [user]=useAuthState(auth);
const handleSignOut=()=>{
    signOut(auth);
}




    return (
        <div className='link-container'>
                 <div className='MOZAFOOD text-white'>
                AryaN FILMS
                </div>
               <div>
               

               
              
                <Link to ='/blog'>Movie</Link>
                <Link to ='/question'>Question</Link>
                 <Link to='/about'>About</Link>

               {
                   user ?
                   <button onClick={handleSignOut} className='btn btn-link signoutbutton'>Signout</button>
                   :
                   <Link to ="/login">Login</Link>
               }
                

               </div>










        </div>
    );
};

export default Header;
