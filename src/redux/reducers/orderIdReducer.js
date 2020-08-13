const orderIdReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ORDER_ID':
        return action.payload;
      default:
        return state;
    }
  }; // end orderIdReducer
  
  // menu will be on the redux state at:
  // state.menu
  export default orderIdReducer;