import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './views/Home/Home';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
  );
}

export default App;
