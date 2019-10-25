import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  ADD_NAME,
  ADD_ADDRESS,
  ADD_CITY,
  ADD_STATE,
  ADD_ZIP
} from "../../store";
import "./Wizard.css";

class Step1 extends Component {
  constructor() {
    //   let reduxState = store.getState();
    super();
    this.state = {
      //   propertyName: reduxState.propertyName,
      //   propertyAddress: reduxState.propertyAddress,
      //   propertyCity: reduxState.propertyCity,
      //   propertyState: reduxState.propertyState,
      //   propertyZip: reduxState.propertyZip
      propertyName: "",
      propertyAddress: "",
      propertyCity: "",
      propertyState: "",
      propertyZip: ""
    };
  }

  componentDidMount() {
    //this is how we subscribe to the changes
    store.subscribe(() => {
      this.setState({ propertyName: store.getState().propertyName });
      this.setState({ propertyAddress: store.getState().propertyAddress });
      this.setState({ propertyCity: store.getState().propertyCity });
      this.setState({ propertyState: store.getState().propertyState });
      this.setState({ propertyZip: store.getState().propertyZip });
    });
  }

  handlePropertyNameChange = val => {
    this.setState({ propertyName: val });
    console.log(this.state.propertyName);
  };

  handlePropertyAddressChange = val => {
    this.setState({ propertyAddress: val });
    console.log(this.state.propertyAddress);
  };
  handlePropertyCityChange = val => {
    this.setState({ propertyCity: val });
    console.log(this.state.propertyCity);
  };
  handlePropertyStateChange = val => {
    this.setState({ propertyState: val });
  };
  handlePropertyZipChange = val => {
    this.setState({ propertyZip: val });
  };

  handleClick = () => {
    const {
      propertyName,
      propertyAddress,
      propertyCity,
      propertyState,
      propertyZip
    } = this.state;
    store.dispatch({
      type: ADD_NAME,
      payload: propertyName
    });
    console.log(store.getState().propertyName);
    store.dispatch({
      type: ADD_ADDRESS,
      payload: propertyAddress
    });
    console.log(store.getState().propertyAddress);
    store.dispatch({
      type: ADD_CITY,
      payload: propertyCity
    });
    console.log(store.getState().propertyCity);
    store.dispatch({
      type: ADD_STATE,
      payload: propertyState
    });
    console.log(store.getState().propertyState);
    store.dispatch({
      type: ADD_ZIP,
      payload: propertyZip
    });
    console.log(store.getState().propertyZip);
  };

  render() {
    return (
      <div className="Wizard">
        <span>Enter Property Name:</span>
        <input
          value={this.state.propertyName}
          onChange={e => this.handlePropertyNameChange(e.target.value)}
        ></input>
        <span>Enter Property Address:</span>
        <input
          value={this.state.propertyAddress}
          onChange={e => this.handlePropertyAddressChange(e.target.value)}
        ></input>
        <span>Enter Property City:</span>
        <input
          value={this.state.propertyCity}
          onChange={e => this.handlePropertyCityChange(e.target.value)}
        ></input>
        <span>Enter Property State:</span>
        <input
          value={this.state.propertyState}
          onChange={e => this.handlePropertyStateChange(e.target.value)}
        ></input>
        <span>Enter Property Zip:</span>
        <input
          value={this.state.propertyZip}
          onChange={e => this.handlePropertyZipChange(e.target.value)}
        ></input>
        <Link to="/wizard/step2">
          <button onClick={this.handleClick}>Next</button>
        </Link>
      </div>
    );
  }
}

export default Step1;
