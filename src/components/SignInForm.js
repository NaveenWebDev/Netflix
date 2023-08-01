import React, { useState } from 'react'
import logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import firebaseConfig from './FirebaseCon'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {

    const app = initializeApp(firebaseConfig);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const signin = (e) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(auth =>{
            if(auth){
                alert("success")
            }
        })
        .catch(error => alert(error.message));

    }

  return (
    <>
        <div className='formHeader h-screen relative'>
        <div className="absolute w-full bg-[#0000007c] h-full z-10"></div>
            <div className="nav z-20 absolute w-full">
                <img src={logo} alt="logo" width="250" className='p-5'/>
            </div>
                <div className="form grid place-items-center z-20 absolute w-full h-full">
                    <form className='bg-[#0000008c] text-white flex flex-col gap-4 p-10 rounded-md'>
                        <h2 className='font-bold text-3xl'>Sign In</h2>

                        <input type="text" value={email} className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name='email' placeholder='Email or Phone Number' onChange={(e)=>setEmail(e.target.value)} />

                        <input type="password" value={password} className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                        
                        <Link to="/banner" onClick={signin} className='bg-[#E40915] rounded-md px-8 py-3 text-center'>Sign In</Link>
                        <div className='flex justify-between'>
                        <div>
                            <input type="checkbox" name="check" /> <span>Remember me</span>
                        </div>
                        <span>need help?</span>
                        </div>
                        <p>New to Netflix? <Link to="/">Sign Up </Link></p>

                    </form>
                </div>
        </div>
    </>
  )
}

export default SignInForm