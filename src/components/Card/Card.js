import React from "react";
import "./Card.css";

const Card = props => (
  <div className="cat-card">
    <img alt='cat' src={props.image} onClick={() => props.clickCat(props.id)}/>
  </div>
);

export default Card;
