import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      allHouses: []
    };
  }

  updateAllHouses = newArr => {
    this.setState({ allHouses: newArr });
  };

  componentDidMount() {
    axios
      .get("/api/listings")
      .then(response => {
        console.log(response.data);
        this.setState({ allHouses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let mappedHouses = this.state.allHouses.map(val => {
      return <House house={val} listings={this.updateAllHouses} key={val.id} />;
    });
    if (mappedHouses === undefined) {
      return <></>;
    } else {
      return (
        <>
          <div>Dashboard</div>
          {mappedHouses}
        </>
      );
    }
  }
}

export default Dashboard;
