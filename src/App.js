import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './views/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import { sortDataAlphabetically } from './assets/functions';
import AddData from './views/AddData/AddData';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {

  const [data, setData] = useState([""])
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const url = "http://www.way2way.in/api/wp-json/mo/v1/agencyList"
    Axios.get(url, {
      mode: 'cors'
    })
      .then(res => sortDataAlphabetically(res.data))
      .then(sortedData => { setData(sortedData); setisLoading(false) })
      .catch(err => console.log(err.message))
    // .finally( response => console.log(response))
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
          <Route exact path="/add-data"  > <AddData /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
