import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BACKEND_URL } from "./Constants";

// const INDEX = 2;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
    };
  }

  componentDidMount() {
    const url = `${BACKEND_URL}/sightings/${this.props.index}`;
    fetch(url) // Send GET request to '/sightings' endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sightings: data }); // Update the 'sightings' state with the fetched data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    const sightings = this.state.sightings;

    return (
      <div>
        {sightings ? (
          <div>
            <p>
              Year: {sightings.YEAR} {sightings.SEASON}
            </p>

            <p>
              Location: {sightings.STATE} 
            </p>

            <p>Location Details: {sightings.LOCATION_DETAILS}</p>
          </div>
        ) : null}
        <Link to="/" style={{ textDecoration: "none" }} >
              Back
            </Link>
      </div>
    );
  }
}

export default App;
