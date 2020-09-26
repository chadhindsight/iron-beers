import React, { Component } from "react";

function Beers(props) {
  const showBeers = () => {
    return props.beers.map((eachBeer) => {
      return (
        <div key={eachBeer._id}>
          <img src={eachBeer.image_url} />
          <h3>{eachBeer.name}</h3>
          <h6>{eachBeer.tagline}</h6>
          <p>Contributed by: {eachBeer.contributed_by}</p>
        </div>
      );
    });
  };

  console.log(props.beers);
  return (
    <div>
      {props.dataReady ? showBeers() : "Loading..."}
      {/* {showBeers()} */}
    </div>
  );
}
export default Beers;
