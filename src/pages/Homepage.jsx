import React from "react";
import Home1 from '../assets/home1.jpg';

const Homepage = (props) => {
  return (
    <>
      <h3>Bienvenue sur la page d'accueil de mon blog</h3>
      <img src={Home1} alt="Homepage picture" width="100%" height="400px"/>
    </>
  );
};

export default Homepage;
