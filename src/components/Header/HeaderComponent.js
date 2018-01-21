import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import logo from './Clock.svg';
import cock from './cock.svg';
import image from './Cat.jpeg';

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
    height: '50px',
    float: 'right',
    color: '#7f8c8d',
  },
};

class HeaderComponent extends Component {
  render() {
    const { classes } = this.props;
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
              <img
                src={cock}
                className={classes.cock}
              />
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
};

export default injectSheet(styles)(HeaderComponent);
