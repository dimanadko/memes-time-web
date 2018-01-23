import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  buttonContainer: {
    float: 'right',
    height: '100%',
    width: '400px',
    display: 'flex',
    flexDirection: 'row-reverse',

  },
  linkStyle: {
    width: '200px',
    color: '#2c3e50',
    borderRight: 0,
    borderBottom: 0,
    border: '1px solid',
    paddingTop: '15px',
    borderColor: '#7f8c8d',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#ffff',
    '&:last-child': {
      borderTopLeftRadius: '25px',
    },
  },
};

class HeaderNav extends Component {
  render() {
    const { classes, regStatus } = this.props;
    return (
      <div className={classes.buttonContainer}>
        {(regStatus !== 'user') ?
          (
            <Link
              className={classes.linkStyle}
              to={{ pathname: '/' }}
            >
              Choose MEME
            </Link>
          ) :
          (<Fragment />)
        }
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
  regStatus: PropTypes.string,
};


export default connect(
  state => ({
    regStatus: state.sessionInfo.regStatus,
  }),
  () => ({}),
)(injectSheet(styles)(HeaderNav));
