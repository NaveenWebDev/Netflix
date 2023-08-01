import React from 'react'
import logo from '../assets/logo-removebg-preview.png'

const SignInForm = () => {
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

                        <input type="text" className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name='email' placeholder='Email or Phone Number' />
                        <input type="password" className='bg-[#323233] text-slate-400 px-8 py-3 rounded-md' name="password" placeholder='Password' />
                        
                        <button className='bg-[#E40915] rounded-md px-8 py-3'>Sign In</button>
                        <div className='flex justify-between'>
                        <div>
                            <input type="checkbox" name="check" /> <span>Remember me</span>
                        </div>
                        <span>need help?</span>
                        </div>

                    </form>
                </div>
        </div>
    </>
  )
}

export default SignInForm