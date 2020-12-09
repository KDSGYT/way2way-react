import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './views/home/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import Axios from 'axios';
import { sortDataAlphabetically } from './assets/functions';
import AddData from './views/AddData/AddData';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { firestore } from './Util/firebase';
import Login from './components/Login/Login';
function App() {

  const [data, setData] = useState([""])
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    firestore.collection('agencies').get()
      .then(res => res.docs.map(doc => doc.data()))// extract data from the response
      .then(res => sortDataAlphabetically(res))// sort the data alphabetically
      .then(sortedData => { setData(sortedData); setisLoading(false) }) // change the DATA state to display the data
      .catch(err => console.log(err.message))
  }, [])


  return (
    <Router >
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Home
              list={data}
              isLoading={isLoading}
            />
            {/* <Footer /> */}
          </Route>
          <Route path="/add-data"  ><AddData /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
