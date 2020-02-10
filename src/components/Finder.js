import React from "react";
import Dragonball from "./Dragonball";
import axios from "axios";
import "../App.css";

class Finder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unknownFighter: []
    };
    this.refreshFighters = this.refreshFighters.bind(this);
  }

  componentDidMount() {
    axios.get("/api/unknown-fighter").then(res => {
      let fighterArray = res.data.map(element => {
        element.name = element.name.replace("_", " ");
        element.name = element.name.replace("_", " ");
        return element;
      });
      this.setState({
        unknownFighter: fighterArray
      });
    });
  }

  refreshFighters() {
    axios.get("/api/new-fighters").then(res => {
      let fighterArray = res.data.map(element => {
        element.name = element.name.replace("_", " ");
        element.name = element.name.replace("_", " ");
        return element;
      });
      this.setState({
        unknownFighter: fighterArray
      });
    });
  }

  render() {
    const fighterList = this.state.unknownFighter.map((element, index) => {
      return (
        <Dragonball
          index={index}
          key={element.id}
          fighter={element}
          chooseFighter={this.props.chooseFighter}
        />
      );
    });

    return (
      <div>
        <div className="finder">{fighterList}</div>
        <button className="button-3" onClick={() => this.refreshFighters()}>
          {" "}
          Summon New Fighters
        </button>
      </div>
    );
  }
}

export default Finder;
