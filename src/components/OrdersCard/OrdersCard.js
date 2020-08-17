import React, { Component } from "react";
import { connect } from "react-redux";

class OrdersCard extends Component {
  render(){
    return (
    <div>
      <div>
        <p>{this.props.orders.id}</p>
      </div>
      <br />
      {this.props.orders.first_name}
      <br />
      <div>
        {this.props.product.description}
      </div>
      <div onClick={() => 
        alert(`${this.props.product.description} added to cart`)}>
        {/* <AddToCartButton product={this.props.product} /> */}
      </div>
    </div>
  );
}
}

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(OrdersCard);