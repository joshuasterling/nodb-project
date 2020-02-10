import React from "react";
import Header from "./components/Header";
import Finder from "./components/Finder";
import FighterContainer from "./components/FighterContainer";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenFighter: []
    };

    this.chooseFighter = this.chooseFighter.bind(this);
    this.saveName = this.saveName.bind(this);
    this.replaceFighter = this.replaceFighter.bind(this);
  }

  componentDidMount() {
    axios.get("/api/fighter").then(res => {
      this.setState({
        chosenFighter: res.data
      });
    });
  }

  chooseFighter(fighter) {
    axios.post("/api/fighter", { fighter }).then(res => {
      this.setState({
        chosenFighter: res.data
      });
    });
  }

  saveName(id, newName) {
    if (!newName) {
      alert("Fighter Must Have a Name");
      return;
    }
    axios.put(`/api/fighter/${id}`, { name: newName }).then(res => {
      this.setState({
        chosenFighter: res.data
      });
    });
  }

  replaceFighter(id) {
    axios.delete(`/api/fighter/${id}`).then(res => {
      this.setState({
        chosenFighter: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Finder chooseFighter={this.chooseFighter} />
        <FighterContainer
          saveName={this.saveName}
          replaceFighter={this.replaceFighter}
          chosenFighter={this.state.chosenFighter}
        />
      </div>
    );
  }
}

export default App;
