import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class OutlinedButtons extends Component {

  render(){
  return (
    <div>
      <Button variant="outlined" className={this.props.classes.button} 
        size="small" onClick={()=>this.props.history.push('/cart')}>
          {/* This button will take the user to the cart page on click */}
        Cart
      </Button>
    </div>
  );
}
}


OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (reduxState)=>({
    reduxState
  })
  export default withStyles(styles)(connect(mapStateToProps)(withRouter(OutlinedButtons)));