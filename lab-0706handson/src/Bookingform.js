// HANDS ON:
// Design a restaurant booking form.

// Capture first name and last name
// (Radio buttons) Seating: outdoors, indoors or VIP indoors
// (Select dropdown) Smoking: smoking or non-smoking
// (Checkboxes) Select an appetizer: Raw fishes, salad, fried cuttlefish or peanuts

// Hands On
// Continuing from the hands-on from React Lab 7,
// use JSON files to load in the seating options,
// smoking options and the appetizers instead of hard-coding them within the form.

import React from "react";
import axios from "axios";

export default class Bookingform extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    seating: "",
    smoking: "",
    appetizer: [],
    allSeatings: [],
    allSmoking: [],
    allAppetizers: [],
    loaded: false,
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateAppetizer = (event) => {
    if (this.state.appetizer.includes(event.target.value)) {
      let clone = this.state.appetizer.filter(
        (el) => el !== event.target.value
      );
      this.setState({
        appetizer: clone,
      });
    } else {
      let clone = [...this.state.appetizer, event.target.value];
      this.setState({
        appetizer: clone,
      });
    }
  };

  //   cannot use arrow function for component did mount
  async componentDidMount() {
    let seatingRequest = axios.get("seating.json");
    let smokingRequest = axios.get("smoking.json");
    let appetizerRequest = axios.get("appetizer.json");

    let seatingResponse = await seatingRequest;
    let smokingResponse = await smokingRequest;
    let appetizerResponse = await appetizerRequest;
    // console.log(response.data);
    this.setState({
      allSeatings: seatingResponse.data,
      allSmoking: smokingResponse.data,
      allAppetizers: appetizerResponse.data,
      loaded: true,
    });
  }

  renderSeating() {
    return this.state.allSeatings.map((el) => {
      return (
        <React.Fragment key={el.value}>
          <input
            type="radio"
            value={el.value}
            name="seating"
            onChange={this.updateFormField}
            checked={this.state.seating === el.value}
          />
          <span>{el.display}</span>
        </React.Fragment>
      );
    });
  }

  renderSmoking() {
    // <option value="smoking">Smoking</option>
    return this.state.allSmoking.map((el) => {
      return <option key={el.value}>{el.display}</option>;
    });
  }

  renderAppetizer() {
    //     <input
    //     type="checkbox"
    //     value="raw fish"
    //     name="appetizer"
    //     onChange={this.updateAppetizer}
    //   />
    //   <span>Raw fish</span>
    return this.state.allAppetizers.map((el) => {
      return (
        <React.Fragment key={el.value}>
          <input
            type="checkbox"
            value={el.value}
            name="appetizer"
            onChange={this.updateAppetizer}
          />
          <span>{el.display}</span>
        </React.Fragment>
      );
    });
  }

  renderForm() {
    return (
      <React.Fragment>
        <h1>booking form</h1>
        <div>
          <label>firstname:</label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.updateFormField}
          />
        </div>

        <div>
          <label>lastname:</label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.updateFormField}
          />
        </div>

        <div>
          <label>Select your seating:</label>
          {this.renderSeating()}
        </div>

        <div>
          <label>Do you smoke?</label>
          <select
            value={this.state.smoking}
            name="smoking"
            onChange={this.updateFormField}
          >
            {this.renderSmoking()}
          </select>
        </div>

        <div>
          <label>Select an appetizer</label>
          {this.renderAppetizer()}
        </div>
      </React.Fragment>
    );
  }

  render() {
    // return (
    //   <React.Fragment>
    //     {this.state.loaded ? this.renderForm() : "...loading"}
    //   </React.Fragment>
    // );

    if (this.state.loaded) {
      return this.renderForm();
    } else {
      return <div>...loading</div>;
    }
  }
}
