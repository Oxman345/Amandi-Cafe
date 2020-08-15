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

  // handleDeleteItem will send the item_id and order_id to 
  //   the DELETE route and remove it from the items table
handleDeleteItem = () => {
    this.props.dispatch({ type: 'DELETE_ITEM', 
    payload: { item_id: this.props.product.id, 
      order_id: this.props.product.order_id }})
}

  render() {
    return (
      <div>
        <Button variant="outlined" className={this.props.classes.button} 
        size="small" onClick={this.handleDeleteItem}>
            {/* This button will remove the item from cart on click */}
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