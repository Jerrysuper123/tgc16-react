import React from "react";
import axios from "axios";

class Surveyform extends React.Component {
  state = {
    name: "",
    colour: "",
    country: "Singapore",
    fruits: [],
    allFruits: [],
    allCountries: [],
    allColors: [],
    loaded: false,
  };

  async componentDidMount() {
    // you can acess public folder directly without ./
    // let fruitsRequest = axios.get("fruits.json");
    // let colorsRequest = axios.get("colors.json");
    // let countriesRequest = axios.get("countries.json");
    // // console.log(response.data);
    // let countriesResponse = await countriesRequest;
    // let fruitsResponse = await fruitsRequest;
    // let colorsResponse = await colorsRequest;

    // this.setState({
    //   allFruits: fruitsResponse.data,
    //   allColors: colorsResponse.data,
    //   allCountries: countriesResponse.data,
    //   loaded: true,
    // });

    //use array to retrieve apis
    let array = [
      {
        key: "fruits",
        // api call no need to be a string
        req: axios.get("fruits.json"),
      },
      {
        key: "colors",
        req: axios.get("colors.json"),
      },
      {
        key: "countries",
        req: axios.get("countries.json"),
      },
    ];

    let responseObj = {};
    for (let eachCall of array) {
      //{fruits: response, colors: reponse, countries: response}
      responseObj[eachCall.key] = await eachCall.req;
    }

    this.setState({
      allColors: responseObj.colors.data,
      allCountries: responseObj.countries.data,
      allFruits: responseObj.fruits.data,
      loaded: true,
    });
  }

  //you can access other object by using this.colors

  renderCountries() {
    /*
      <select name="country" value={this.state.country} onChange={this.updateFormField}>
        <option value="singapore">Singapore</option>
        <option value="malaysia">Malaysia</option>
        <option value="indonesia">Indonesia</option>
      </select>
      */
    return this.state.allCountries.map((el) => {
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
    for (let eachColor of this.state.allColors) {
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
    if (this.state.loaded) {
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
            {this.state.allFruits.map((el) => {
              return (
                <React.Fragment key={el.value}>
                  <input
                    type="checkbox"
                    name="fruits"
                    value={el.value}
                    onChange={this.updateFruits}
                    checked={this.state.fruits.includes(el.value)}
                  />
                  <span>{el.display}</span>
                </React.Fragment>
              );
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return <div>...loading</div>;
    }
  }
}

export default Surveyform;
