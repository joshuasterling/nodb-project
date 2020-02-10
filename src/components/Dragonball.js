import React from "react";
import "../App.css";

class Dragonball extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragonballClicked: false
    };
  }

  checkDragonball() {}

  render() {
    console.log(this.props);
    return (
      <div>
        <p className="fighter-name">{this.props.fighter.name}</p>
        <button
          className="button"
          onClick={() => {
            this.props.chooseFighter({
              name: this.props.fighter.name
            });
          }}
        >
          {" "}
          Select Fighter{" "}
        </button>
      </div>
    );
  }
}

export default Dragonball;
