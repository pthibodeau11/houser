import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "details",
      propertyName: "",
      propertyAddress: "",
      propertyCity: "",
      propertyZip: 0,
      propertyImage: "",
      propertyMortgage: 0,
      propertyRent: 0
    };
  }

  handlePropertyNameChange = val => {
    this.setState({ propertyName: val });
  };

  handlePropertyAddressChange = val => {
    this.setState({ propertyAddress: val });
  };
  handlePropertyCityChange = val => {
    this.setState({ propertyCity: val });
  };
  handlePropertyZipChange = val => {
    this.setState({ propertyZip: val });
  };
  handlePropertyImageChange = val => {
    this.setState({ propertyImage: val });
  };
  handlePropertyMortgageChange = val => {
    this.setState({ propertyImage: val });
  };
  handlePropertyRentChange = val => {
    this.setState({ propertyImage: val });
  };

  render() {
    return (
      <>
        <div>Add New Listing</div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        {this.state.currentPage === "details" ? (
          <>
            <input
              placeholder="enter name"
              value={this.state.propertyName}
              onChange={e => this.handlePropertyNameChange(e.target.value)}
            ></input>
            <input
              placeholder="enter address"
              value={this.state.propertyAddress}
              onChange={e => this.handlePropertyAddressChange(e.target.value)}
            ></input>
            <input
              placeholder="enter city"
              value={this.state.propertyCity}
              onChange={e => this.handlePropertyCityChange(e.target.value)}
            ></input>
            <input
              placeholder="enter zip"
              value={this.state.propertyZip}
              onChange={e => this.handlePropertyZipChange(e.target.value)}
            ></input>
            <button onClick={() => this.setState({ currentPage: "image" })}>
              Next
            </button>
          </>
        ) : this.state.currentPage === "image" ? (
          <>
            <input
              placeholder="enter image url"
              value={this.state.propertyImage}
              onChange={e => this.handlePropertyImageChange(e.target.value)}
            ></input>
            <button onClick={() => this.setState({ currentPage: "details" })}>
              Previous
            </button>
            <button onClick={() => this.setState({ currentPage: "cost" })}>
              Next
            </button>
          </>
        ) : this.state.currentPage === "cost" ? (
          <>
            <input
              placeholder="enter mortgage"
              value={this.state.propertyMortgage}
              onChange={e => this.handlePropertyMortgageChange(e.target.value)}
            ></input>
            <input
              placeholder="enter desired rent"
              value={this.state.propertyRent}
              onChange={e => this.handlePropertyRentChange(e.target.value)}
            ></input>
            <button onClick={() => this.setState({ currentPage: "image" })}>
              Previous
            </button>
            <button>COMPLETE?</button>
          </>
        ) : null}
      </>
    );
  }
}

export default Wizard;
