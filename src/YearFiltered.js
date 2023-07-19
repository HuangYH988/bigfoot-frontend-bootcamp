import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BACKEND_URL } from "./Constants";

// const INDEX = 2;

class YearFiltered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
    };
  }

  componentDidMount() {
    const url = `${BACKEND_URL}/sightings/year/${this.props.year}`;
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
    
    //console.log(sightings);
    return (
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
        <p>Sightings in year {this.props.year}</p>
        {sightings ? (
          <div>
            {sightings.map((sighting, index) => (
              <div key={index + 1}>
                <h4>
                  Sighting {index+1}: {sighting.YEAR} {sighting.SEASON}
                </h4>

                <p>Location: {sighting.STATE}</p>

                <p>Location Details: {sighting.LOCATION_DETAILS}</p>
                <br />
              </div>
            ))}
          </div>
        ) : null}
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </div>
    );
  }
}

export default YearFiltered;
