import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import "./ProductCard.css";

class ProductCard extends Component {
  // handleAddToCart will send the product.id to
  // the POST route and add it to the items table
  handleAddToCart = () => {
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: { product_id: this.props.product.id },
    });

    alert(`${this.props.product.description} added to cart`);
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
            <Button onClick={this.handleAddToCart}>Add to cart</Button>
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
export default connect(mapStateToProps)(ProductCard);
