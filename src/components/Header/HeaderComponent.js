import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import logo from './Clock.svg';
import cock from './cock.svg';
import exit from './exit.svg';
import image from './Cat.jpeg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Actions from '../../actions/index';

const logOutAction = Actions.logOutAction;

const styles = {
  header: {
    backgroundColor: '#c0392b',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    borderBottom: '2px solid #7f8c8d',
    height: '160px',
    '& span': {
      fontSize: '70px',
      color: 'white',
    },
  },
  sideLogo: {
    height: '140px',
    borderRadius: '80px',
    marginTop: '3%',
    marginLeft: '20%',
    overflow: 'visible',
  },
  title: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    textAlign: 'center',
  },
  headerContent: {
    display: 'grid',
  },
  cock: {
    marginTop: '5px',
    marginRight: '5px',
    height: '50px',
    float: 'right',
    color: '#7f8c8d',
  },
  Link: {
    float: 'right',
    height: '60px',
    width: '60px',
  },
};

class HeaderComponent extends Component {

  handleLogOutClick(regStatus) {
    if (regStatus !== 'user') {
      this.props.onLogOutClick();
    }
  }

  render() {
    const { classes, regStatus } = this.props;
    return (
      <header className={classes.header}>
        <div>
          <img className={classes.sideLogo} src={image} />
        </div>
        <div className={classes.headerContent}>
          <div className={classes.title}>
            <div>
              <span>Memes Time</span>
              <img  src={logo} />
            </div>
            <div>
              <Link
                onClick={this.handleLogOutClick.bind(this, regStatus)}
                to={{ pathname: '/login' }}
                className={classes.Link}
              >
                <img
                  src={(regStatus === 'user' ? cock : exit)}
                  className={classes.cock}
                />
              </Link>
            </div>
          </div>
          <div>
            <HeaderNav />
          </div>
        </div>
      </header>
    );
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  regStatus: PropTypes.string,
  onLogOutClick: PropTypes.func,
};

export default connect(
  state => ({
    regStatus: state.sessionInfo.regStatus,
  }),
  dispatch => ({
    onLogOutClick: () => {
      console.log('LogOut');
      dispatch(logOutAction);
    },
  }),
)(injectSheet(styles)(HeaderComponent));
