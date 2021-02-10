import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Author from './views/Author/Author';
import Agency from './views/Agency/Agency';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import UserCTX from './CTX/CTX'
import NOTFOUND from './views/404/404';
import { firebaseAuth } from './Util/firebase';
import { getAds, getUserFromDB } from './assets/functions'
import UserProfile from './views/UserProfile/UserProfile';
import Accomodation from './views/Accomodation/Accomodation';
import AdView from './views/Accomodation/AdView/AdView';
import UserInfo from './views/Signup/UserInfo/UserInfo';
import ForgetPassword from './views/ForgotPassword/ForgetPassword';
export const AdsCTX = createContext([])

function App() {
  const [ads, setAds] = useState([]);

  const [userData, setUserData] = useState({})
  const [signOut, setSignOut] = useState(true)
  const [signup, setSignup] = useState(false)
  const [error, setError] = useState("")

  const value = {
    userData,//User Data to be accessed by the whole app 
    setUserData, //set userData for global state
    signOut, //is the user signedout
    setSignOut, // set the user signedout true or false
    signup, //is the user signing up
    setSignup //set the user is signing up
  }


  // useEffect(() => {
  //   if(userData.displayName === null){
  //     setUserData({
  //       displayName: ""
  //     })
  //   }
  // }, [userData])

  //load data form database if the user is already Signed in
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;

        /**
         * Find alternative as this created error of redirecting to profile insted to add user info after signup
         */
        if (!signup) {
            getUserFromDB(uid, setUserData, setError)
        }

        setSignOut(false)
      }

    });
    // get all the ads from DB to be displayed
    getAds(setAds);

  }, []);

  return (
    <Router>
      <div className="App">
        <UserCTX.Provider value={value}>
          <AdsCTX.Provider value={ads}>
            <Navbar />

            <Switch>
              {/* Route for homepage */}
              <Route exact path="/">
                <Home />
              </Route>

              {/* Agecny Route */}
              <Route path="/agencies">
                <Agency />
              </Route>

              <Route exact path="/accomodation">
                <Accomodation />
              </Route>

              <Route path="/accomodation/:AID">
                <AdView />
              </Route>

              {/* Author Route */}
              <Route path="/author">
                <Author />
              </Route>


              {/* Login Route */}
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/forgot-password">
                <ForgetPassword />
              </Route>

              {/* Signup Route */}
              <Route path="/signup">
                <Signup />
              </Route>

              <Route path={`/user-info`} >
                <UserInfo />
              </Route>

              <Route path="/profile">
                <UserProfile />
              </Route>

              <Route>
                <NOTFOUND />
              </Route>
            </Switch>
          </AdsCTX.Provider>
        </UserCTX.Provider>
      </div>
    </Router>
  );
}

export default App;
