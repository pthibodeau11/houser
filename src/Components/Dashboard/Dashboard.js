import React, { Component } from "react";
import House from "../House/House";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Dashboard</div>
        <House />
      </>
    );
  }
}

export default Dashboard;
