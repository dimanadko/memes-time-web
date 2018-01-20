import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';


const styles = {
  Header: {
    height: '20px',
    backgroundColor: 'red',
  },
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Header} />
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Header);
