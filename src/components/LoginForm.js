import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Actions from '../actions/index';

const signInAction = Actions.signInAction;


const styles = {
  buttonContainer: {
    margin: 'auto',
    width: '50%',
  },
  container: {
    borderRadius: '10px',
    width: '400px',
    background: '#2c3e50',
    height: '150px',
    paddingTop: '30px',
    margin: 'auto',
  },
  sign: {
    background: '#c0392b',
    color: 'white',
    width: '100%',
    height: '100%',
    fontSize: '25px',
    marginTop: '10%',
    outline: 'none',
  },
  main: {
    height: '45vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    background: 'white',
    padding: '10% 20%',
  },
  label: {
    width: '30%',
    marginLeft: '5%',
    color: '#ecf0f1',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    marginLeft: '10%',
  },
  input: {
    width: '150px',
    outline: 'white',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
    };
    this.updateNickname.bind(this);
    this.updatePassword.bind(this);
    this.click.bind(this);
  }

  updateNickname = (e) => {
    this.setState({ nickname: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  click = () => {
    this.props.onSignInClick(this.state.nickname, this.state.password);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Nickname: </span>
            </div>
            <input
              className={classes.input}
              text={this.state.nickname}
              onChange={this.updateNickname}
            />
          </div>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Password: </span>
            </div>
            <input
              className={classes.input}
              text={this.state.Nickname}
              onChange={this.updatePassword}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.sign} onClick={this.click}>
            Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSignInClick: PropTypes.func,
};

export default connect(
  () => (null),
  dispatch => ({
    onSignInClick: (nickname, password) => {
      dispatch(signInAction(nickname, password));
    },
  })
)(injectSheet(styles)(LoginForm));
