import React from "react";
import "./App.css";
import routes from "../src/routes";
import { HashRouter } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
      </div>
      {routes}
    </HashRouter>
  );
}

export default App;
