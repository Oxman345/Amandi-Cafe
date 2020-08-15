import React, { Component } from "react";
import { connect } from "react-redux";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

class ProductCard extends Component {
  render(){
    return (
    <div>
      <div>
        {`Price: $${this.props.product.price}`}
      </div>
      <br />
      <img src={this.props.product.img} 
      alt={this.props.product.description}>
      </img>
      <br />
      <div>
        {this.props.product.description}
      </div>
      <div onClick={() => 
        alert(`${this.props.product.description} added to cart`)}>
        <AddToCartButton product={this.props.product} />
      </div>
    </div>
  );
}
}

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(ProductCard);