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

handleDeleteItem = (event) => {
    console.log('In handleDeleteItem', this.props.product.id );
    this.props.dispatch({ type: 'DELETE_ITEM', payload: {product_id: this.props.product.id }})
}

 
render() {
  return (

    <div>
      <Button variant="outlined" className={this.props.classes.button} size="small"
        onClick={this.handleDeleteItem}
        >
        Remove
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