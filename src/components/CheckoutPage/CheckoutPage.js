import React, { useEffect } from "react";
import { connect } from "react-redux";

// import "./CheckoutPage.css";



const CheckoutPage = ({ reduxState, dispatch }) => {
  useEffect(() => {
    //This will activate the saga that will do a get call for menu items
    dispatch({ type: "UPDATE_PROFILE" });
  }, []);

  return (
    <>
      <div class="header">
        <div></div>
        <h1>Checkout</h1>
      </div>

        <div>
            <form>

            </form>
        </div>
    </>
  );
};

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(CheckoutPage);
