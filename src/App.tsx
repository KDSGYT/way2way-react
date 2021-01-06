import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './views/Home/Home';
import AboutSection from './Components/AboutSection/AboutSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Author from './views/Author/Author';
import AgencySection from './Components/AgencySection/AgencySection';
import AccomodationSection from './Components/AccomodationSection/AccomodationSection';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          {/* Route for homepage */}
          <Route exact path="/">
            <Home />
            <AgencySection />
            <AccomodationSection />
            <AboutSection />
          </Route>

          {/* Agecny Route */}
          <Route path="/agencies">
          </Route>

          {/* Author Route */}
          <Route path="/author">
            <Author />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
