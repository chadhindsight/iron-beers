import React, { useState } from "react";
import Axios from "axios";

const NewBeer = () => {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    //First, destructure the event object
    const { name, value } = e.target;

    setBeerData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let responseFromAPI = await Axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerData
      );
      console.log(responseFromAPI);
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="name"
          onChange={handleChange}
          value={beerData.name}
          placeholder="name"
        />
        <input
          name="tagline"
          onChange={handleChange}
          value={beerData.tagline}
          placeholder="tagline"
        />
        <input
          name="description"
          onChange={handleChange}
          value={beerData.description}
          placeholder="description"
        />
        <input
          name="first_brewed"
          onChange={handleChange}
          value={beerData.first_brewed}
          placeholder="first_brewed"
        />
        <input
          name="brewers_tips"
          onChange={handleChange}
          value={beerData.brewers_tips}
          placeholder="brewers_tips"
        />
        <input
          name="attenuation_level"
          onChange={handleChange}
          type="number"
          value={beerData.attenuation_level}
          placeholder="attenuation_level"
        />
        <input
          name="contributed_by"
          onChange={handleChange}
          value={beerData.name}
          placeholder="contributed_by"
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
