const menuReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_MENU':
        return action.payload;
      default:
        return state;
    }
  }; // end menuReducer
  
  // menu will be on the redux state at:
  // state.menu
  export default menuReducer;