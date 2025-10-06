import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
return (
    <nav>
      <ul className="flex justify-center space-x-8 pb-6">
       <Link to = "/"><button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 px-6 py-1 bg-gray-800  rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Home</button></Link>
       <Link to = "/Workouts"><button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 px-6 py-1 bg-gray-800  rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Workouts</button></Link>
       <Link to = "/Nutrition"><button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 px-6 py-1 bg-gray-800  rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Nutrition</button></Link>
       <Link to = "/Progress"><button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 px-6 py-1 bg-gray-800  rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Progress</button></Link>
       <Link to = "/Contact"><button className="text-gray-100 font-semibold hover:text-emerald-400 hover:bg-gray-900 px-6 py-1 bg-gray-800  rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Contact</button></Link>
      </ul>
    </nav>
);
}

export default NavBar;