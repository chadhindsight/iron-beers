import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Beer from './components/Beer'
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers"

function App() {
  const [dataReady, setDataReady] = useState(false);
  const [beers, setBeers] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    getAllBeers()
  }, [])

  const getAllBeers = () => {
    Axios.get(baseUrl)
      .then(response => {
        setBeers(response.data) // save the array of the data instead of the whole response
        setDataReady(true)
      }).catch(err => console.log(err))
  }

  // Pass this search logic down as props to another comp
  const searchHandler = async (e) => {
    await setQuery(e.target.value);
    let response = await Axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    );
    setBeers(response.data)
    console.log(response.data)
  };

  return (
    <div>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        <Route exact path='/beers' render={props => <Beers {...props} beers={beers}
          dataReady={dataReady}
          searchHandler={searchHandler}
          query={query} />} />
        <Route exact path='/beers/random' render={props => <RandomBeer {...props} />} />
        <Route exact path='/beers/:id' render={props => <Beer {...props} beers={beers}
        />} />
        <Route exact path='/new-beer' render={props => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
