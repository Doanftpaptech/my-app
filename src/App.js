import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import "./test.css";
import Testbar from "./components/test";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar />
          <Testbar />
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
