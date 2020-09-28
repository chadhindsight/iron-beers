import React from "react";

const Beer = (props) => {
  let beerCode = props.match.params.id;
  let beerObj = props.beers.find((eachBeer) => beerCode === eachBeer._id);
  return (
    <div>
      <img alt="what the beer looks like" />
      <h2>{beerObj.name}</h2>
      <h3></h3>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Beer;
//  image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
