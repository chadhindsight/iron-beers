import React from "react";
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

    submitBeer((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={submitBeer}>
        <input
          name="name"
          onChange={hadnleChange}
          value={beerData.name}
          placeholder="name"
        />
        <input
          name="tagline"
          onChange={hadnleChange}
          value={beerData.tagline}
          placeholder="tagline"
        />
        <input
          name="description"
          onChange={hadnleChange}
          value={beerData.description}
          placeholder="description"
        />
        <input
          name="first_brewed"
          onChange={hadnleChange}
          value={beerData.first_brewed}
          placeholder="first_brewed"
        />
        <input
          name="brewers_tips"
          onChange={hadnleChange}
          value={beerData.brewers_tips}
          placeholder="brewers_tips"
        />
        <input
          name="attenuation_level"
          onChange={hadnleChange}
          value={beerData.attenuation_level}
          placeholder="attenuation_level"
        />
        <input
          name="contributed_by"
          onChange={hadnleChange}
          value={beerData.name}
          placeholder="contributed_by"
        />
      </form>
    </div>
  );
};

export default NewBeer;
