import React from "react";

const Beer = (props) => {
  let beerObj = props.beers.find(
    (eachBeer) => eachBeer._id === props.match.params.id
  );

  return (
    <div>
      <img src={beerObj.image_url} alt="what the beer looks like" />
      <h2>{beerObj.name}</h2>
      <h3>{beerObj.tagline}</h3>
      <p>{beerObj.first_brewed}</p>
      <p>{beerObj.attenuation_level}</p>
      <p>{beerObj.description}</p>
      <p>{beerObj.contributed_by}</p>
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
