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
    cursor: 'pointer',
    maxWidth: '200px',
    width: 'fill-available',
    color: '#2c3e50',
    borderRight: 0,
    borderBottom: 0,
    border: '1px solid',
    paddingTop: '1.5vh',
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

  onUpdateButtonClick(sessionId) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
      }),
      headers,
    };

    fetch('/updateMemesDb', myInit).then((response) => {
      console.log(response);
      alert('Memes DB has been updated ' +
      (response.status === 200 ? 'successfully' : 'unsuccessfully') + ' !');
    });

  }

  render() {
    const { classes, regStatus, sessionId } = this.props;
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
        {(regStatus === 'admin') ?
          (
            <div
              className={classes.linkStyle}
              onClick={this.onUpdateButtonClick.bind(this, sessionId)}
            >
              Update Memes DB
            </div>
          ) :
          (<Fragment />)
        }
      </div>
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
  regStatus: PropTypes.string,
  sessionId: PropTypes.string,
};


export default connect(
  state => ({
    regStatus: state.sessionInfo.regStatus,
    sessionId: state.sessionInfo.sessionId,
  }),
  () => ({}),
)(injectSheet(styles)(HeaderNav));
