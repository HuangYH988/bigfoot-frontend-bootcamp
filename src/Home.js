import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Routing from "./Routing";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
    };
  }
  shouldRender() {
    const { pathname } = window.location;
    
    return pathname === "/" || pathname === "";
  }
  render() {
    const shouldRender = this.shouldRender();
    console.log(shouldRender)
    const index = this.state.index;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {shouldRender && (
            <div>
              <h3>Please input sightings index (0-99):</h3>
              {/* <label>Index:</label> */}
              <input
                type="text"
                value={index}
                onChange={(e) => this.setState({ index: e.target.value })}
                placeholder="Index Here"
              />
              <br />
              <Link
                to={`${index}`}
                onClick={() => this.setState({ index: "" })} // Clear index state on submit
                style={{ textDecoration: "none" }}
              >
                Submit
              </Link>
            </div>
          )}
          <Routing />
        </header>
      </div>
    );
  }
}

export default Home;