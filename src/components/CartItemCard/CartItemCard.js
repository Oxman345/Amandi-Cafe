import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../Button";

class CartItemCard extends Component {

  handleDeleteItem = () => {
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: {
        item_id: this.props.product.id,
        order_id: this.props.product.order_id,
      },
    });
  };
  render() {
    return (
      <div>
        <div>{`Price: $${this.props.product.price}`}</div>
        <br />
        <img
          src={this.props.product.img}
          alt={this.props.product.description}
        ></img>
        <br />
        <div>{this.props.product.description}</div>
        <Button variant="secondary" onClick={this.handleDeleteItem}>
          Remove
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(CartItemCard);
