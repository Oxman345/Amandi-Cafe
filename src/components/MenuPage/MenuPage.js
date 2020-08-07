import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import GoToCartButton from '../GoToCartButton/GoToCartButton';
import {withRouter} from 'react-router';
import './MenuPage.css'


class MenuPage extends Component {

  componentDidMount(){
    //This will activate the saga that will do a get call for menu items
    this.props.dispatch({ type: 'FETCH_MENU' });
  } // end componentDidMount

 

  render() {
    // return <h1>menu</h1>
    return (
      <div>
        <h1>Menu</h1>
        {/* {JSON.stringify(this.props.reduxState.menu)} */}
        <form class='grid'>
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
                <AddToCartButton onClick={console.log('In onClick')}/>
              </li>
            </ul>) :
            false
            //end conditional
          }       
        </form>
        <GoToCartButton />
      </div>
    ) // end return
  } // end render
} // end class

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState)=>({
  reduxState
})
export default connect(mapStateToProps)(MenuPage);
