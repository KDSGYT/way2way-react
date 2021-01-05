import React, { useState, useEffect } from 'react';
import './App.scss';
import Triangle from './Components/RightTriangle/Triangle';
import Navbar from './Components/Navbar/Navbar';
import RightTriangle from './Components/LeftTriangle/RightTriangle';
import Home from './views/Home/Home';
import AboutSection from './Components/AboutSection/AboutSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          {/* Route for homepage */}
          <Route exact path="/">

            {/* Home section */}
            <Home />

            {/* Agency section */}
            <section id="agency-area">
              <div className="text">
                <h1>Agencies</h1>
                <p>A list of all employment agencies that can help you to survive in Canada as a newcommer</p>
              </div>
              <span id="right-triangle">

                <Triangle />
              </span>
            </section>

            {/* Accomodation section */}
            <div id="accomodation-area">
              <div className="accomodation">
                <h1>Accomodation</h1>
                <p>Ads posted by desis for desis. Find accomodation starting at $350/month</p>
              </div>
              <span id="left-triangle">
                <RightTriangle />
              </span>
            </div>
            {/* AboutSection */}
            <AboutSection />
          </Route>

          {/* Agecny Route */}
          <Route path="/agencies">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
