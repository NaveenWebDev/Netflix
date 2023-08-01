import React, { useState } from 'react'
import logo from '../assets/logo-removebg-preview.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import firebaseConfig from './FirebaseCon'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {

    const app = initializeApp(firebaseConfig);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    const [user, setUser] = useState(false)

    const auth = getAuth();

    const signin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(auth =>{
            if(auth){
                alert("success");
                Navigate('/banner');
            }
        })
        .catch(error => {
            setUser(true)
        });

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

                        <input type="text" value={email} className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name='email' placeholder='Email or Phone Number' required onChange={(e)=>setEmail(e.target.value)} />

                        <input type="password" value={password} className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name="password" placeholder='Password' required  onChange={(e)=>setPassword(e.target.value)} />
                        
                        <button onClick={signin} className='bg-[#E40915] rounded-md px-8 py-3 text-center'>Sign In</button>

                        { user?<p className='text-red-700'>User not found Please signUP Now</p> : null}

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