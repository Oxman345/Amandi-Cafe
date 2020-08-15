import React, { Component } from "react";
import { connect } from "react-redux";
import GoToCartButton from "../GoToCartButton/GoToCartButton";
import ProductCard from "../ProductCard/ProductCard";
import "./MenuPage.css";


class MenuPage extends Component {

  // componentDidMount is calling the GET route on page load for menu items
componentDidMount(){
  this.props.dispatch({ type: "FETCH_MENU" })
}

render() {
  return (
    <>
      <div className="header">
        <div></div>
        <h1>Menu</h1>
        <GoToCartButton />
      </div>
      {this.props.reduxState.menu.length > 0 && (
        <div className="container">
          {/* This is going through each product in the menu array 
              and passing it down to ProductCard as a prop */}
          {this.props.reduxState.menu.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};
}

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(MenuPage);
