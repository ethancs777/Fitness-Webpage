import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-row mb-16 justify-start min-w-full bg-indigo-900/50 ">
      <h1 className="text-white  font-bold text-4xl content-center align-middle pr-8 pl-8 min-[980px]:border-blue-200 min-[980px]:border-b-4 min-[980px]:border-r-4  text-center">Fitness</h1>
    <nav className="justify-start w-full content-center pb-8 pt-8 pl-6 min-[980px]:border-blue-200 min-[980px]:border-b-4">
      <ul className="hidden min-[980px]:flex justify-between w-full pr-32">
        <div className="flex space-x-8">
          <Link to="/">
            <p className={`${isActive('/') ? 'text-emerald-400' : 'text-gray-100'} text-center font-semibold hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-2`}>Home</p>
          </Link>
          <Link to="/Workouts">
            <p className={`${isActive('/Workouts') ? 'text-emerald-400' : 'text-gray-100'} text-center font-semibold hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-2`}>Workouts</p>
          </Link>
          <Link to="/Nutrition">
            <p className={`${isActive('/Nutrition') ? 'text-emerald-400' : 'text-gray-100'} text-center font-semibold hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-2`}>Nutrition</p>
          </Link>
          {/*  
          <Link to="/Progress">
            <p className="text-gray-100 text-center font-semibold hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-2">Progress</p>
          </Link>
          */}
        </div>
        {/*
        <Link to="/Contact">
          <p className="text-gray-100 text-center font-semibold hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-2">Contact</p>
        </Link>
        */}
      </ul>
    

      <div className="min-[980px]:hidden relative">
        <div className="flex justify-end pr-7">
          <div className="relative">
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
            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 bg-gray-800 rounded-md shadow-lg mt-2`}>
              <ul className="flex flex-col space-y-1 p-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <p className={`${isActive('/') ? 'text-emerald-400 bg-gray-700' : 'text-gray-100'} text-sm font-semibold hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300 min-w-[100px] text-center`}>Home</p>
                </Link>
                <Link to="/Workouts" onClick={() => setIsMenuOpen(false)}>
                  <p className={`${isActive('/Workouts') ? 'text-emerald-400 bg-gray-700' : 'text-gray-100'} text-sm font-semibold hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300 min-w-[100px] text-center`}>Workouts</p>
                </Link>
                <Link to="/Nutrition" onClick={() => setIsMenuOpen(false)}>
                  <p className={`${isActive('/Nutrition') ? 'text-emerald-400 bg-gray-700' : 'text-gray-100'} text-sm font-semibold hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300 min-w-[100px] text-center`}>Nutrition</p>
                </Link>
                {/*
                <Link to="/Progress" onClick={() => setIsMenuOpen(false)}>
                  <p className="text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300 min-w-[100px] text-center">Progress</p>
                </Link>
                <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
                  <p className="text-gray-100 text-sm font-semibold hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded transition-all duration-300 min-w-[100px] text-center">Contact</p>
                </Link>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;