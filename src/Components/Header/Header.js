import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Header</div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </>
    );
  }
}

export default Header;
