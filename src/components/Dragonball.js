import React from "react";
import db1 from "../assets/1-star-dragon-ball.png";
import db2 from "../assets/2-star-dragon-ball.png";
import db3 from "../assets/3-star-dragon-ball.png";
import db4 from "../assets/4-star-dragon-ball.png";
import db5 from "../assets/5-star-dragon-ball.png";
import db6 from "../assets/6-star-dragon-ball.png";
import db7 from "../assets/7-star-dragon-ball.png";
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
    return (
      <div className="fighter-display">
        <p className="fighter-name">{this.props.fighter.name}</p>
        {this.props.index === 0 ? (
          <img src={db1} />
        ) : this.props.index === 1 ? (
          <img src={db2} />
        ) : this.props.index === 2 ? (
          <img src={db3} />
        ) : this.props.index === 3 ? (
          <img src={db4} />
        ) : this.props.index === 4 ? (
          <img src={db5} />
        ) : this.props.index === 5 ? (
          <img src={db6} />
        ) : this.props.index === 6 ? (
          <img src={db7} />
        ) : null}
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
