import React from "react";
import "./Jumbotron.css";

import sakura from './sakura.png';

const divStyle = {
  backgroundImage: 'url(' + sakura + ')'
};

const Jumbotron = () => (
  <div className="jumbotron text-center" style={divStyle}>
    <h1>Clicky-Cat</h1>
    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
  </div>
);

export default Jumbotron;
