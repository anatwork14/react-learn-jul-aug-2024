import React from "react";

class AddUserInfo extends React.Component {
  // JSX - Cho phep code JS trong Code HTML
  state = {
    name: "Khanh An",
    age: "99",
  };
  handleClick(event) {
    console.log("Click me button");
    console.log("My name is", this.state.name);
    this.setState({
      name: "Mao Mao",
    });
  }
  handleonMouseHover = (event) => {
    console.log(event.target);
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleonChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleonChangeAge = (event) => {
    // BAD Code
    this.setState({
      age: event.target.value,
    });
  };

  handleonSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    }); // Qua đây là xài luôn function Props
  }
  render() {
    return (
      <div>
        My name is {this.state.name}
        <br />
        and I'm in {this.state.age}
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button> */}
        <form
          onSubmit={(event) => {
            this.handleonSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            type="text"
            onChange={(event) => {
              this.handleonChangeInput(event);
            }}
            value={this.state.name}
          />

          <label> Your age: </label>
          <input
            type="number"
            onChange={(event) => {
              this.handleonChangeAge(event);
            }}
            value={this.state.age}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfo;
