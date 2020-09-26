import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Axios from 'axios';
import Beers from './components/Beers';

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers"
let allBeersEndpoint = '/'

function App() {
  const [dataReady, setDataReady] = useState(false);
  const [beers, setBeers] = useState([])

  useEffect(() => {
    getAllBeers()
  }, [])

  const getAllBeers = () => {
    Axios.get(baseUrl + allBeersEndpoint)
      .then(response => {
        setBeers(response.data)// save the array of the data instead of the whole object response
        setDataReady(true)
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/home' render={props => <HomePage {...props} />} />
        <Route exact path='/beers' render={props => <Beers {...props} beers={beers} dataReady={dataReady} />} />
      </Switch>
    </div>
  );
}

export default App;
