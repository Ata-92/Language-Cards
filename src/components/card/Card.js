import React, { Component } from "react";
import "./Card.css";
import {categories} from "../../helper/data";

class Card extends Component {


  render() {
    return (
      <div className="Card">
        <h1>Languages</h1>
        {categories.map((category) => (
          <div className={category.name}>
            <img src={category.img} alt={`${category.name} logo`} className={`${category.name}-img`} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Card;
