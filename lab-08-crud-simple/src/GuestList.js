import React from "react";

export default class GuestList extends React.Component {
  state = {
    guests: ["Tony stark", "Jerry tom"],
    newGuest: "",
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addGuest = () => {
    this.setState({
      guests: [...this.state.guests, this.state.newGuest],
    });
  };

  updateGuest = (g) => {
    let updatedGuest = prompt(`fill in name to replace ${g}`);
    let indexToUpdate = this.state.guests.indexOf(g);
    let clone = this.state.guests.slice();
    clone[indexToUpdate] = updatedGuest;
    this.setState({
      guests: clone,
    });
  };

  deleteGuest = (g) => {
    let clone = this.state.guests.slice();
    let indexToRemove = clone.indexOf(g);
    delete clone[indexToRemove];
    this.setState({
      guests: clone,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {/* read */}
          {this.state.guests.map((g) => (
            <li key={g}>
              {g}
              <button
                //update
                onClick={() => {
                  // bind the guest parameter
                  this.updateGuest(g);
                }}
                style={{
                  marginLeft: "5px",
                }}
              >
                Edit
              </button>
              <button
                //   delete
                onClick={() => {
                  this.deleteGuest(g);
                }}
                style={{
                  marginLeft: "5px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <label>Guest list:</label>
        <input
          type="text"
          name="newGuest"
          onChange={this.updateFormField}
          value={this.state.newGuest}
        />
        {/* create */}
        <button onClick={this.addGuest}>add</button>
      </React.Fragment>
    );
  }
}
