import React, { Component } from "react";
import { connect } from "react-redux";

class OrdersCard extends Component {
  render(){
    return (
    <div>
      <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Item</th>
            <th>Price</th>
            <th>Status</th>
            <th>Order Date</th>
        </tr>
        <div>
            <tr>
                <td>{this.props.orders.firstName}</td>
                <td>{this.props.orders.Lastname}</td>
                <td>{this.props.orders.description}</td>
                <td>{this.props.orders.price}</td>
                <td>{this.props.orders.status}</td>
                <td>{this.props.orders.order_date}</td>
            </tr>
        </div>
      </table>
    </div>
  );
}
}

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(OrdersCard);