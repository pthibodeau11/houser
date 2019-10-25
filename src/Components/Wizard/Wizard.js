import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import "./Wizard.css";
import routes from "../../routes";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div className="Wizard">
          <div>Add New Listing</div>
          <Link to="/">
            <button>Cancel</button>
          </Link>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default Wizard;
