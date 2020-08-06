import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

//   function handleAddToCart(event) {
//     console.log('In handleAddToCart')
//   };
//   onClick={this.handleAddToCart}

  return (

    <div>
      <Button variant="outlined" className={classes.button} 
        onClick={()=>{console.log('In onClick')
        this.props.dispatch({ type: 'Add_TO_CART'})}}>
        Add To Cart
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);