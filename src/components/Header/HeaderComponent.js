import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import logo from './Clock.svg';
import image from './Cat.jpeg';

const styles = {
  header: {
    backgroundColor: '#f39c12',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    borderBottom: '2px solid #7f8c8d',
    '& span': {
      fontSize: '6vw',
      color: 'white',
    },
  },
  navContainer: {
    position: 'relative',
  },
  sideLogo: {
    height: '100%',
    width: '65%',
    borderRadius: '45%',
    paddingLeft: '20%',
    paddingTop: '1%',
    overflow: 'visible',
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
        <div>
          <span>Memes Time</span>
          <img  src={logo} />
        </div>
        <div />
        <div className={classes.navContainer}>
          <HeaderNav />
        </div>
      </header>
    );
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(HeaderComponent);
