import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <ShoppingItem key={index} item={item} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(ShoppingList);