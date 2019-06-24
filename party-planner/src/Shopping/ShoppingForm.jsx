import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from '../actions/shoppingActions';

class ShoppingForm extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addItem({ value: this.state.item, completed: false });
    this.setState({ item: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ item: event.target.value })}
          name="value"
          value={this.state.item}
          placeholder="Enter Item Here"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(ShoppingForm);