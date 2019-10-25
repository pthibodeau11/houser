import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_IMAGE_URL } from "../../store";

class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      propertyImageUrl: ""
    };
  }

  handlePropertyImageUrlChange = val => {
    this.setState({ propertyImageUrl: val });
  };

  handleClick = () => {
    const { propertyImageUrl } = this.state;
    store.dispatch({
      type: ADD_IMAGE_URL,
      payload: propertyImageUrl
    });
  };

  render() {
    return (
      <div className="Wizard">
        <span>Enter Image URL:</span>
        <input
          value={this.state.propertyImageUrl}
          onChange={e => this.handlePropertyImageUrlChange(e.target.value)}
        ></input>
        <Link to="/wizard/step1">
          <button>Previous</button>
        </Link>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default Step2;
