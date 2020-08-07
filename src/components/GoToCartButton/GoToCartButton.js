import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
import { useHistory } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const OutlinedButtons = (props) => {
const history = useHistory();
const { classes } = props;
  return (

    <div>
      <Button variant="outlined" className={classes.button} size="small"
        onClick={()=>history.push('/cart')}>
        Cart
      </Button>
    </div>
  );
}


OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (reduxState)=>({
    reduxState
  })
export default withStyles(styles)(connect(mapStateToProps)(OutlinedButtons));

// export default withRouter(connect(mapStateToProps))(withStyles(styles)(OutlinedButtons));