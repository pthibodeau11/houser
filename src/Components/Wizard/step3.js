import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_MORTGAGE, ADD_RENT } from "../../store";

class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      propertyMortgage: 0,
      propertyRent: 0
    };
  }

  handlePropertyMortgageChange = val => {
    this.setState({ propertyMortgage: val });
  };
  handlePropertyRentChange = val => {
    this.setState({ propertyRent: val });
  };

  handleClick = () => {
    const { propertyMortgage, propertyRent } = this.state;
    store.dispatch({
      type: ADD_MORTGAGE,
      payload: propertyMortgage
    });
    store.dispatch({
      type: ADD_RENT,
      payload: propertyRent
    });
  };

  render() {
    return (
      <div className="Wizard">
        <span>Enter Cost info:</span>
        <input
          value={this.state.propertyMortgage}
          onChange={e => this.handlePropertyMortgageChange(e.target.value)}
        ></input>
        <input
          value={this.state.propertyRent}
          onChange={e => this.handlePropertyRentChange(e.target.value)}
        ></input>
        <Link to="/wizard/step2">
          <button>Previous</button>
        </Link>
        <button>Finish</button>
      </div>
    );
  }
}

export default Step3;
