import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, toggleCompleted } from "../actions/shoppingActions";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleCompleted = () => {
    this.props.toggleCompleted(this.props.index);
  };

  render() {
    return (
      <div>
        <h2
          onClick={this.handleToggleCompleted}
          style={this.props.item.completed ? { color: "red" } : null}
        >
          {this.props.item.value}
        </h2>
        <button onClick={() => this.props.deleteItem(this.props.index)}>
          Delete!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteItem }
)(ShoppingItem);