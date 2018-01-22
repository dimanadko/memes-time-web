import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  buttonContainer: {
    paddingRight: '10%',
    marginLeft: '10%',
  },
  container: {
    width: '400px',
    background: '#2c3e50',
    height: '150px',
    paddingTop: '30px',
    margin: 'auto'
  },
  sign: {
    background: 'black',
    color: 'white',
    width: '100%',
    height: '100%',
    fontSize: '25px',
    marginTop: '5%',
    marginRight: '5%',
  },
  main: {
    height: '45vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    background: 'white',
    padding: '10% 20%'
  },
  label: {
    width: '30%',
    marginLeft: '5%'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    marginLeft: '10%'
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      checked: false,
    }
    this.updateFirstName.bind(this);
    this.updateLastName.bind(this);
    this.click.bind(this);
  };

  updateFirstName = (e) => {
    this.setState({firstName: e.target.value})
  };

  updateLastName = (e) => {
    this.setState({lastName: e.target.value})
  };

  click = (e) => {
    this.setState({checked: e.target.value})
  }

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>First name: </span>
            </div>
            <input text={this.state.firstName} onChange={this.updateFirstName}>
            </input>
          </div>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Last name: </span>
            </div>
            <input text={this.state.firstName} onChange={this.updateLastName}>
            </input>
          </div>
          <div className={classes.buttonContainer}>
          <button className={classes.sign} onClick={this.click}>
            Sign in
          </button>
          </div>
        </div>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(LoginForm)
