import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row mb-16 justify-start min-w-full bg-black ">
      <h1 className="text-white  font-bold text-4xl content-center align-middle pr-4 min-[980px]:border-white min-[980px]:border-b-2 min-[980px]:border-r-2 pb-8 pt-8 pl-2">Fitness</h1>
    <nav className="justify-start w-full content-center pb-8 pt-8 pl-6 min-[980px]:border-white min-[980px]:border-b-2">
      <ul className="hidden min-[980px]:flex justify-between w-full pr-32">
        <div className="flex space-x-8">
          <Link to="/">
            <button className=" text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Home</button>
          </Link>
          <Link to="/Workouts">
            <button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Workouts</button>
          </Link>
          <Link to="/Nutrition">
            <button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Nutrition</button>
          </Link>
          <Link to="/Progress">
            <button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Progress</button>
          </Link>
        </div>
        <Link to="/Contact">
          <button className=" text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Contact</button>
        </Link>
      </ul>
    

      <div className="min-[980px]:hidden relative">
        <div className="flex justify-end pr-7">
          <button onClick={toggleMenu} className="text-gray-100 hover:text-emerald-400 focus:outline-none transition-colors duration-300" aria-label="Toggle menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 `}>
          <ul className="flex flex-col space-y-1 items-end p-4 ">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <button className=" text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-900 px-3  bg-gray-800 rounded-lg transition-all duration-300 shadow-lg min-w-[100px]">Home</button>
            </Link>
            <Link to="/Workouts" onClick={() => setIsMenuOpen(false)}>
              <button className=" text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-900 px-3 bg-gray-800 rounded-lg transition-all duration-300 shadow-lg min-w-[100px]">Workouts</button>
            </Link>
            <Link to="/Nutrition" onClick={() => setIsMenuOpen(false)}>
              <button className=" text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-900 px-3 bg-gray-800 rounded-lg transition-all duration-300 shadow-lg min-w-[100px]">Nutrition</button>
            </Link>
            <Link to="/Progress" onClick={() => setIsMenuOpen(false)}>
              <button className=" text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-900 px-3  bg-gray-800 rounded-lg transition-all duration-300 shadow-lg min-w-[100px]">Progress</button>
            </Link>
            <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
              <button className=" text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-900 px-3 bg-gray-800 rounded-lg transition-all duration-300 shadow-lg min-w-[100px]">Contact</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;