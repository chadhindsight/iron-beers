import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

// Get info by beer ID & display the result in a new component
function Beers(props) {
  console.log(props.query);
  const showBeers = () => {
    return props.beers.map((eachBeer) => {
      return (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/beers/${eachBeer._id}`}
          key={eachBeer._id}
        >
          <div>
            <img src={eachBeer.image_url} alt="what the beer looks like" />
            <h3>{eachBeer.name}</h3>
            <h6>{eachBeer.tagline}</h6>
            <p>Contributed by: {eachBeer.contributed_by}</p>
          </div>
        </Link>
      );
    });
  };

  console.log(props.beers);
  return (
    <div>
      <Header />
      <Link to={`/beers/random`}>
        <button>Get a Random Beer</button>
      </Link>
      <input
        type="text"
        placeholder="search for a beer"
        value={props.query}
        onChange={props.searchHandler}
      />
      {props.dataReady ? showBeers() : "Loading..."}
      {/* {showBeers()} */}
    </div>
  );
}
export default Beers;
