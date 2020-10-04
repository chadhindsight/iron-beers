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
    } catch (error) {}
  };
  return <div></div>;
};

export default NewBeer;
