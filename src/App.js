import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './views/home/Home';
// import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Footer from './components/Footer'

function App() {

  const [data, setData] = useState([""])

  useEffect(() => {
    const url = "http://localhost:8080/api/agency"
    Axios.get(url)
      .then(response => setData(response.data))
      .catch(err => console.log(err.message))
  }, [])


  return (
    <div className="App">
        <Home list={data} />
        <Footer />
    </div>
  );
}

export default App;
