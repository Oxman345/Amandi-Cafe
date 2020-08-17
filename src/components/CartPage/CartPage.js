import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../Button";
// import GoToCheckoutButton from "../GoToCheckoutButton/GoToCheckoutButton";
import CartItemCard from "../CartItemCard/CartItemCard";
import "./CartPage.css";

class CartPage extends Component {
  // componentDidMount is calling our GET route
  //  and sending the orderId to get user cart
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_CART",
      payload: this.props.reduxState.orderId,
    });
  }

  render() {
    return (
      <>
        <div className="header">
          <div></div>
          <h1>Cart</h1>
          <Button
            variant="secondary"
            onClick={() => this.props.history.push("/checkout")}
          >
            Checkout
          </Button>
          {/* <GoToCheckoutButton /> */}
        </div>
        {this.props.reduxState.cart.length > 0 && (
          <div className="container">
            {/* This is going through each product in the cart array 
              and passing it down to CartItemCard as a prop */}
            {this.props.reduxState.cart.map((product) => (
              <CartItemCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </>
    );
  }
}

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(CartPage);
