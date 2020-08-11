const addToCartReducer = (state = [], action) => {
    console.log('In CartReducer', action.payload)
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      default:
        return state;
    }
  }; // end addToCartReducer
  
  // menu will be on the redux state at:
  // state.cart
  export default addToCartReducer;