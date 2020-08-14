const orderIdReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ORDER_ID':
        return action.payload;
      default:
        return state;
    }
  }; 
  export default orderIdReducer;