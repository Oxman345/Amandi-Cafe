const addToCartReducer = (state = {}, action) => {
    console.log('In CartReducer')
    switch (action.type) {
      case 'ADD_TO_CART':
        return action.payload;
      default:
        return state;
    }
  }; // end addToCartReducer
  
  // menu will be on the redux state at:
  // state.cart
  export default addToCartReducer;