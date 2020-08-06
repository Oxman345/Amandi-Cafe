import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import {connect} from 'react-redux';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;

//   const id = this.props.reduxState.menu.id

  return (

    <div>
      <Button variant="outlined" className={classes.button} size="small"
        // onClick={()=>{console.log('In onClick')
        // this.props.dispatch({ type: 'ADD_TO_CART' })}}
        >
        Add To Cart
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);