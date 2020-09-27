import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Beers from './components/Beers';

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers/"

function App() {
  const [dataReady, setDataReady] = useState(false);
  const [beers, setBeers] = useState([])

  useEffect(() => {
    getAllBeers()
  }, [])

  const getAllBeers = () => {
    Axios.get(baseUrl)
      .then(response => {
        setBeers(response.data)// save the array of the data instead of the whole object response
        setDataReady(true)
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        <Route exact path='/beers' render={props => <Beers {...props} beers={beers} dataReady={dataReady} />} />
      </Switch>
    </div>
  );
}

export default App;
