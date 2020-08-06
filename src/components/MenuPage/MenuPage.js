import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddToCartButton from '../AddToCartButton/AddToCartButton'


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// If you needed to add local state or other things,
// you can make it a class component like:


class MenuPage extends Component {

  componentDidMount(){
    //This will activate the saga that will do a get call for menu items
    this.props.dispatch({ type: 'FETCH_MENU' });
  } // end componentDidMount

 

  render() {
    return (
      <div>
        <h1>Menu</h1>
        {/* {JSON.stringify(this.props.reduxState.menu)} */}
        <form>
          {
            // conditional used to map the product table 
            // (Price, Image, and Description) on the DOM
            this.props.reduxState.menu.length>0 ?
            this.props.reduxState.menu.map((products, index)=>
            <ul key={index} products={products} id={products.id}>
              <br />
              <li>
                {`Price: $${products.price}`}
                <img src={products.img} alt='Rolled ice cream'></img>
                {products.description}
                <br />
                <AddToCartButton />
              </li>
            </ul>) :
            false
            //end conditional
          } 
      
        </form>
      </div>
    ) // end return
  } // end render
} // end class

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState)=>({
  reduxState
})
export default connect(mapStateToProps)(MenuPage);
