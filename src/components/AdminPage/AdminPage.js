import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrdersCard from '../OrdersCard/OrdersCard';

class AdminPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ORDERS' });
  }

  render() {
    return (
      <>
      <div className="header">
      <div></div>
      <h1>Admin</h1>
    </div>
    
    {this.props.reduxState.orders.length > 0 && (
      <div className="container">
        {/* This is going through each orders in the menu array 
            and passing it down to OrdersCard as a prop */}
        {this.props.reduxState.menu.map((orders) => (
          <OrdersCard orders={orders} key={orders.id} />
        ))}
      </div>
    )}
    </>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (reduxState) => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminPage);
