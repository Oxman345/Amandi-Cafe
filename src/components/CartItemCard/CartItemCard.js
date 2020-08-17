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
      <div className="productcard-container">
        <div className="productcard-leftsection">
          <div>
            <div className="productcard-name">
              {this.props.product.description}
            </div>
            <div>${this.props.product.price}</div>
          </div>
          <div className="productcard-btn-container">
          <Button variant="secondary" onClick={this.handleDeleteItem}>
            Remove
          </Button>  
          </div>
        </div>
        <img
          src={this.props.product.img}
          alt={this.props.product.description}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(CartItemCard);