const fetchCartReducer = (state = [], action) => {
    console.log('In CartReducer', action.payload)
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default fetchCartReducer;