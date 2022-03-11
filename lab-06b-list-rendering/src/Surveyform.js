import React from "react";

class Surveyform extends React.Component {
  state = {
    name: "",
    colour: "singapore",
    country: "",
    fruits: [],
  };

  //you can access other object by using this.colors
  colors = [
    {
      display: "赤",
      value: "red",
    },
    {
      display: "Green",
      value: "green",
    },
    {
      display: "Blue",
      value: "blue",
    },
  ];

  countries = [
    {
      display: "Singapore",
      value: "singapore",
    },
    {
      display: "Malaysia",
      value: "malaysia",
    },
    {
      display: "Indonesia",
      value: "indonesia",
    },
  ];

  fruits = [
    {
      display: "Apple",
      value: "apple",
    },
    {
      display: "Banana",
      value: "banana",
    },
    {
      display: "Orange",
      value: "orange",
    },
  ];

  renderCountries() {
    /*
      <select name="country" value={this.state.country} onChange={this.updateFormField}>
        <option value="singapore">Singapore</option>
        <option value="malaysia">Malaysia</option>
        <option value="indonesia">Indonesia</option>
      </select>
      */
    return this.countries.map((el) => {
      return (
        <option key={el.value} value={el.value}>
          {el.display}
        </option>
      );
    });
  }

  renderColours = () => {
    //     <input
    //     type="radio"
    //     name="colour"
    //     value="red"
    //     checked={this.state.colour === "red"}
    //   />
    //   <span>Red</span>
    let radioButtons = [];
    for (let eachColor of this.colors) {
      let rb = (
        <div key={eachColor.value}>
          <input
            type="radio"
            name="colour"
            value={eachColor.value}
            checked={this.state.colour === eachColor.value}
            onChange={this.updateFormField}
          />
          <span>{eachColor.display}</span>
        </div>
      );
      radioButtons.push(rb);
    }
    return radioButtons;
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateFruits = (event) => {
    if (this.state.fruits.includes(event.target.value)) {
      let clone = this.state.fruits.filter((el) => el !== event.target.value);
      this.setState({
        fruits: clone,
      });
    } else {
      this.setState({
        fruits: [...this.state.fruits, event.target.value],
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Survey form</h1>
        {/* never use form, we just use axios to send data */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>

        <div>
          <label>Colors:</label>
          {this.renderColours()}
        </div>

        <div>
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
            {this.renderCountries()}
          </select>
        </div>

        <div>
          <label>Select your favorite fruits</label>
          {/* functional will not work  below */}
          {this.fruits.map((el) => {
            return (
              <React.Fragment key={el.value}>
                <input
                  type="checkbox"
                  value={el.value}
                  onChange={this.updateFruits}
                />
                <span>{el.display}</span>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Surveyform;
