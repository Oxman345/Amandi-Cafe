const fetchOrdersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ORDERS':
        return action.payload;
      default:
        return state;
    }
  }; // end fetchOrdersReducer
  
  // menu will be on the redux state at:
  // state.menu
  export default fetchOrdersReducer;