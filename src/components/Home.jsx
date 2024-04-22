import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div name="home" className="bg-primary h-screen w-full">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Lucas Domene
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a iOS Developer
        </h2>
        <p className="text-[#8892b0] py-5 mx-w-[700px]">
          I'm an iOS developer specializing in building exception digital
          experiences. Currently, I'm focused on building responsive iOS and Web
          applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
