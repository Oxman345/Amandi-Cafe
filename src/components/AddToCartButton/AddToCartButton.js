import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class OutlinedButtons extends Component {
  // state = {
  //   id: this.props.product.id
  // }


handleAddToCart = (event) => {
    console.log('In handleAddToCart', this.props.product.id );
    // console.log(this.props.product.id)
    // this.setState({
    //   id: event.target.id
    // })
    this.props.dispatch({ type: 'ADD_TO_CART', payload: {product_id: this.props.product.id }})
}

  
render() {
  return (

    <div>
      <Button variant="outlined" className={this.props.classes.button} size="small"
        onClick={this.handleAddToCart}
        >
        Add to Cart
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
export default withStyles(styles)(connect(mapStateToProps)(OutlinedButtons));