import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  turnTheCard = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <div className="Card"  onClick={this.turnTheCard}>

        {this.state.isVisible ?
          <ul className={`${this.props.name}-options`}>
            <li className={`${this.props.name}__domain`}>{this.props.options[0]}</li>
            <li className={`${this.props.name}__invent-date`}>{this.props.options[1]}</li>
            <li className={`${this.props.name}__inventor`}>{this.props.options[2]}</li>
          </ul> :
          <div className={this.props.name}>
            <img src={this.props.img} alt={`${this.props.name} logo`} className={`${this.props.name}-img`} />
            <p>{this.props.name}</p>
          </div>
        }

      </div>
    )
  }
}

export default Card;
