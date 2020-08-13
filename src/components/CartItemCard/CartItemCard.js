import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";

// const {reduxState} = this.props

class CartItemCard extends Component {
// const CartItemCard = ({ product }) => (
render(){
    return(
    <div>
      <div>{`Price: $${this.props.product.price}`}</div>
      <br />
      {/* <p>{JSON.stringify(product)}</p> */}
      <img src={this.props.product.img} alt={this.props.product.description}></img>
      <br />
      <div>{this.props.product.description}</div>
      <div onClick={() => alert(`${this.props.product.id} removed`)}>
        <DeleteItemButton product={this.props.product} />
      </div>
    </div>
  );
}
}

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(CartItemCard);