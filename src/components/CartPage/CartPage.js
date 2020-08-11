import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import "./CartPage.css";



const CartPage = ({ reduxState, dispatch }) => {
  useEffect(() => {
    //This will activate the saga that will do a get call for menu items
  }, []);

  return (
    <>
      <div class="header">
        <div></div>
        <h1>Cart</h1>
        <CheckoutButton />
      </div>

      {JSON.stringify(reduxState.cart[1])}

      {reduxState.cart.length > 0 && (
        <div class="container">
          {reduxState.cart.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(CartPage);



































// import React, {Component} from 'react';
// import {connect} from 'react-redux';

// class CartPage extends Component {

//   componentDidMount(){
   
    
//   } // end componentDidMount

 

//   render() {
//     return (
//       <div>
//         <h1>Cart</h1>
//         {/* {JSON.stringify(this.props.reduxState.menu)} */}
//         <form>
//           {
//             // conditional used to map the product table 
//             // (Price, Image, and Description) on the DOM
//             this.props.reduxState.cart.length>0 ?
//             this.props.reduxState.cart.map((products, index)=>
//             <ul key={index} products={products} id={products.id}>
//               <br />
//               <li>
//                 {`Price: $${products.price}`}
//                 <img src={products.img} alt='Rolled ice cream'></img>
//                 {products.description}
//                 <br />
//               </li>
//             </ul>) :
//             false
//             //end conditional
//           } 
      
//         </form>
//       </div>
//     ) // end return
//   } // end render
// } // end class

// //this is used to connect this page to the reduxState and use props anywhere
// const mapStateToProps = (reduxState)=>({
//   reduxState
// })
// export default connect(mapStateToProps)(CartPage);