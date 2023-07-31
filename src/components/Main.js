import React from "react";
import Header from "./Header";
const Main = () => {
  return (
    <header className="h-screen relative">
      <Header></Header>
      <div className="h-full w-full bg-gradient-to-t from-[#000000ad] to-[#00000067] absolute top-0 z-10">
        <main className="h-full">
          <div className="max-w-[1050px] w-[90%] m-auto h-full">
            <div className="h-full flex items-center justify-center flex-col">
              <h1 className="text-white text-center text-4xl md:text-5xl font-bold">
                Unlimited movies, TV shows and more
              </h1>
              <p className="md:text-2xl text-center text-white my-5">
                Watch anywhere. Cancel anytime.
              </p>
              <p className="md:text-2xl text-center text-white">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="flex justify-center items-center flex-col gap-3 mt-3 w-[100%] md:flex-row">
                <input type="email" className="bg-[#31313175] border font-bold rounded-md text-2xl py-3 px-6 mx-3" name="email" id="email" placeholder="Email Address"/>
                <button className="bg-[#E50914] text-white font-bold md:text-2xl py-3 px-6 rounded-md">Get Started</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Main;
