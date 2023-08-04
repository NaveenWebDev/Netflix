import React from "react";
import logo from "../assets/logo-removebg-preview.png";
import userlogo from '../assets/user.jpg';
const BannerHeader = () => {
  return (
    <>
      <nav className="bg-gradient-to-t from-[#00000000] to-[#000000] z-20 absolute w-full">
        <div className="max-w-[1300px] w-[90%] m-auto ">
          <div className="navbar py-5 flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo" width="150px" />
              <div className="btns gap-5 ml-5 hidden lg:flex">
                <ul className="navbar flex gap-5">
                  <li className="items font-bold">Home</li>
                  <li className="items">Tv Shows</li>
                  <li className="items">Movies</li>
                  <li className="items">News & Popular</li>
                  <li className="items">My List</li>
                  <li className="items">Browse by Language</li>
                </ul>
              </div>
            </div>

            <div>
                <ul className="flex justify-between gap-5 items-center">
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li><i class="fa-solid fa-bell"></i></li>
                    <li id="user" className="flex items-center gap-2"> <span className="inline-block h-8 w-8">
                        <img src={userlogo} alt="user" />
                    </span> <i class="fa-solid fa-caret-down"></i></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BannerHeader;