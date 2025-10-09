import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Workouts from './components/Workouts';
import WorkoutDetails from './components/WorkoutDetails';
import Nutrition from './components/Nutrition';
import NutritionDetails from './components/NutritionDetails';
import Progress from './components/Progress';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Workouts" element={<Workouts />} />
        <Route path="/Workouts/:category" element={<WorkoutDetails />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/Nutrition/:category" element={<NutritionDetails />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
