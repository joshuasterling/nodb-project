import React from "react";

class Fighter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      userInput: ""
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div className="layer">
        {this.state.isEditing ? (
          <div>
            <input onChange={this.handleChange} />
            <button
              className="button-2"
              onClick={() => {
                this.props.saveName(
                  this.props.fighter.id,
                  this.state.userInput
                );
                this.toggleEdit();
              }}
            >
              {" "}
              Save{" "}
            </button>
          </div>
        ) : (
          <p onDoubleClick={this.toggleEdit}>{this.props.fighter.name}</p>
        )}
        <button
          className="button"
          onClick={() => this.props.replaceFighter(this.props.fighter.id)}
        >
          {" "}
          Replace{" "}
        </button>
      </div>
    );
  }
}

export default Fighter;
