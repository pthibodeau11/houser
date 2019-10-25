import React, { Component } from "react";
import axios from "axios";

class House extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteHouse = () => {
    axios.delete(`/api/house/${this.props.house.id}`).then(response => {
      console.log(response.data);
      //   this.props.listings();
    });
  };

  render() {
    const {
      property_name,
      property_address,
      property_city,
      property_state,
      property_zip,
      property_image_url,
      property_mortgage,
      property_rent
    } = this.props.house;
    return (
      <>
        <div className="House">House</div>
        <div>{property_image_url}</div>
        <div>{property_name}</div>
        <div>{property_address}</div>
        <div>{property_city}</div>
        <div>{property_state}</div>
        <div>{property_zip}</div>
        <div>{property_mortgage}</div>
        <div>{property_rent}</div>
        <button onClick={this.deleteHouse}>DELETE</button>
      </>
    );
  }
}

export default House;
