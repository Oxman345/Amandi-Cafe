import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {

  componentDidMount() {
    // this.props.dispatch({ type: 'FETCH_ORDERS' });
  }

  render() {
    return (
      <div>
       <h1>Admin</h1> 
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminPage);
