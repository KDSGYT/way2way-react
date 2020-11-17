import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './views/home/Home';
// import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import { sortDataAlphabetically } from './assets/functions'

function App() {

  const [data, setData] = useState([""])
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const url = "http://www.way2way.in/api/wp-json/mo/v1/agencyList"
    Axios.get(url, {
      mode: 'cors'
    })
      .then(res => sortDataAlphabetically(res.data))
      .then(sortedData => {setData(sortedData); setisLoading(false)})
      .catch(err => console.log(err.message))
    // .finally( response => console.log(response))
  }, [])


  return (
    <div className="App">
      <Home 
        list={data} 
        isLoading={isLoading} 
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
