import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './views/Home/Home';
import AboutSection from './Components/AboutSection/AboutSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Author from './views/Author/Author';
import AgencySection from './Components/AgencySection/AgencySection';
import AccomodationSection from './Components/AccomodationSection/AccomodationSection';
import Agency from './views/Agency/Agency';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import UserCTX from './CTX/CTX'

function App() {
  const [userData, setUserData] = useState({})

  const value = { userData, setUserData }
  React.useEffect(() => {
    console.log(`userdata: ${userData}`)
  }, [userData]);
  return (
    <Router>
      <div className="App">
        <UserCTX.Provider value={value}>
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
              <Agency />
            </Route>

            {/* Author Route */}
            <Route path="/author">
              <Author />
            </Route>


            {/* Login Route */}
            <Route path="/login">
              <Login />
            </Route>

            {/* Signup Route */}
            <Route>
              <Signup />
            </Route>


          </Switch>
        </UserCTX.Provider>
      </div>
    </Router>
  );
}

export default App;
