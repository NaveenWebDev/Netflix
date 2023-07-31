import React from 'react'
import logo from '../assets/logo-removebg-preview.png'

const Header = () => {
  return (
    <>
        <nav className='bg-gradient-to-t from-[#00000000] to-[#000000] z-20 absolute w-full'>
            <div className="max-w-[1050px] w-[90%] m-auto ">
                <div className="navbar py-5 flex justify-between items-center">
                    <img src={logo} alt="logo" width="150px"/>
                    <div className="btns flex gap-5">

                    <select className='bg-[#c0c0c031] text-white py-1 px-3 rounded-md border border-white'>
                        <option value="English" selected>Englist</option>
                        <option value="Hindi" >Hindi</option>
                    </select>
                    <button className='bg-[#E50914] text-white py-1 px-3 rounded-md'>Sign in</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header