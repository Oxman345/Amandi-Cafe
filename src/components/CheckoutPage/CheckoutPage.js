import React, { Component } from "react";
import { connect } from "react-redux";

class CheckoutPage extends Component{

  // state is holding the value of each property
  state = {
    firstName: this.props.reduxState.profile.firstName,
    lastName: this.props.reduxState.profile.lastName,
    email: this.props.reduxState.profile.email,
    phoneNumber: this.props.reduxState.profile.phoneNumber
  }

// handleUpdateProfile will send state to PUT route on submit click
handleUpdateProfile = (event) => {
  event.preventDefault()
  this.props.dispatch({type:"UPDATE_PROFILE", payload: this.state});
  alert('Profile Updated')
}

// updateFirstName will set the changes to state
updateFirstName = (event) => {
  event.preventDefault()
  this.setState({
    firstName: event.target.value
  })
}

// updateLastName will set the changes to state
updateLastName = (event) => {
  event.preventDefault()
  this.setState({
    lastName: event.target.value
  })
}

// updateEmail will set the changes to state
updateEmail = (event) => {
  event.preventDefault()
  this.setState({
    email: event.target.value
  })
}

// updatePhoneNumber will set the changes to state
updatePhoneNumber = (event) => {
  event.preventDefault()
  this.setState({
    phoneNumber: event.target.value
  })
}

render(){
  return (
    <>
      <div className="header">
        <div></div>
        <h1>Checkout</h1>
      </div>

        <div>
            <form>
              <h3>Profile</h3>
                <label>First Name: </label>
                <input type="text" placeholder='First Name' 
                value={this.state.firstName} onChange={this.updateFirstName}></input>
                <br />
                <label>Last Name: </label>
                <input type="text" placeholder='Last Name' 
                value={this.state.lastName} onChange={this.updateLastName}></input>
                <br />
                <label>Email: </label>
                <input type="varchar" placeholder='Email' 
                value={this.state.email} onChange={this.updateEmail}></input>
                <br />
                <label>Phone Number: </label>
                <input type="number" placeholder='Phone Number' 
                value={this.state.phoneNumber} onChange={this.updatePhoneNumber}></input>
                <br />
                <input type='submit' onClick={this.handleUpdateProfile}></input>
            </form>
        </div>
    </>
  );
};
}

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(CheckoutPage);
