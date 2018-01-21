import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  Footer: {
    left: '0',
    bottom: '0',
    height: '100px',
    backgroundColor: '#c0392b',
    borderTop: '2px solid #7f8c8d',
    marginTop: '-260px',
  },
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Footer} />
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Footer);
