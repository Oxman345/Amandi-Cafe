import React, {Component} from 'react';
import {connect} from 'react-redux'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// If you needed to add local state or other things,
// you can make it a class component like:


class MenuPage extends Component {

  componentDidMount(){
    //This will activate the saga that will do a get call for menu items
    console.log("In componentDidMount Menu")
    this.props.dispatch({ type: 'FETCH_MENU' });
  } // end componentDidMount

  render() {
    return (
      <div>
        <p>Menu Page</p>
        {/* {JSON.stringify(this.props.reduxState.menu)} */}
        <form>
          {
            // this conditional is used to map the products on the DOM
            this.props.reduxState.menu.length>0 ?
            this.props.reduxState.menu.map((products, index)=>
            <ul key={index} products={products} id={products.id}>
              <li>
                {`Price: $${products.price}`}
                <img src={products.img} alt='Rolled ice cream'></img>
                {products.description}
              </li>
            </ul>) :
            false
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})
export default connect(mapStateToProps)(MenuPage);
