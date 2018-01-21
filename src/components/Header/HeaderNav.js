import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  buttonContainer: {
    float: 'right',
    height: '100%',
    width: '400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  linkStyle: {
    color: '#2c3e50',
    borderRight: 0,
    borderBottom: 0,
    border: '1px solid',
    paddingTop: '15px',
    borderColor: '#7f8c8d',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#ffff',
    '&:first-child': {
      borderTopLeftRadius: '25px',
    },
  },
};

class HeaderNav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.buttonContainer}>
        <Link
          className={classes.linkStyle}
          to={{ pathname: '/' }}
        >
          Choose MEME
        </Link>
        <Link
          className={classes.linkStyle}
          to={{ pathname: '/stats' }}
        >
          Check out Stats
        </Link>
      </div>
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default (injectSheet(styles)(HeaderNav));
