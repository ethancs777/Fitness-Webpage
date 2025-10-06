import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <ul className="hidden min-[551px]:flex justify-center space-x-8 pb-6">
        <Link to="/">
          <button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Home</button>
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
        <Link to="/Contact">
          <button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-1 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[100px] px-4">Contact</button>
        </Link>
      </ul>

      <div className="min-[551px]:hidden">
        <div className="flex justify-end pr-7 pb-4">
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

        {}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <ul className="flex flex-col space-y-2 px-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-3 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 shadow-lg">Home</button>
            </Link>
            <Link to="/Workouts" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-3 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 shadow-lg">Workouts</button>
            </Link>
            <Link to="/Nutrition" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-3 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 shadow-lg">Nutrition</button>
            </Link>
            <Link to="/Progress" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-3 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 shadow-lg">Progress</button>
            </Link>
            <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 py-3 bg-gray-800 rounded-lg border border-gray-600 transition-all duration-300 shadow-lg">Contact</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;