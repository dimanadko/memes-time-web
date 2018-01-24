import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Actions from '../actions/index';

const memeCoupleAction = Actions.memeCoupleAction;
const chosenMemeAction = Actions.chosenMemeAction;



const styles = {
  memeCouple: {
    padding: '0 0 0 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginTop: '0',
    marginBottom: '0',
    '& li': {
      border: '10px double white',
      padding: '30px 10px',
      listStyleType: 'none',
      margin: 'auto',
      marginBottom: '15px',
      marginTop: '15px',
      backgroundColor: '#2c3e50',
    },
  },
  memeImg: {
    height: '400px',
    maxWidth: '425px',
    verticalAlign: 'center',
  },
  memeChooserContainer: {
    verticalAlign: 'center',
    width: '960px',
    backgroundColor: '#ecf0f1',
    marginTop: '0',
  },
  roflAble: {
    cursor: 'pointer',
    border: '2px solid #7f8c8d',
    width: '18%',
    minWidth: '180px',
    marginLeft: '41%',
    marginBottom: '1%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: '20px',
    opacity: '0.9',
    mask: 'url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png")',
    maskSize: '3000% 100%',
    color: '#000',
    animation: 'ani2 0.7s 29 forwards',
  },

  '@keyframes ani2': {
    from: { maskPosition: '0 0' },
    to: { maskPosition: '100% 0' },
  },
};

class ChooseMeme extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.sessionId) {
      console.log('dispatch must has happened');
      this.props.onChosenMeme(null, this.props.sessionId);
    } else {
      this.props.history.push('/login');
    }
  }

  handleMemeClick(memeIds, id) { //Here must a post dispatch happen
    if (!this.props.sessionId) { this.props.history.push('/login'); }
    console.log(Array.isArray(id));
    const data = memeIds.map((memeId) => {
      console.log({ memeId }, { id });
      if (id.indexOf(memeId) === -1) {
        return ({ '_id': memeId, clicked: false });
      }
      return ({ '_id': memeId, clicked: true });
    });
    console.log(data);
    this.props.onChosenMeme(data, this.props.sessionId);
  }

  render() {
    const { classes, memeCouple, sessionId } = this.props;
    const memeIds = memeCouple.map(meme => meme.id);
    console.log({ memeCouple });

    return (
      <div className={classes.memeChooserContainer}>
        <ul className={classes.memeCouple}>
          {
            memeCouple.map(meme => (
              <li key={meme.id}>
                <img
                  src={meme.url} className={classes.memeImg}
                  onClick={this.handleMemeClick.bind(this, memeIds, [meme.id])}
                />
              </li>
            ))
          }
        </ul>
        <button
          className={classes.roflAble}
          onClick={this.handleMemeClick.bind(
            this,
            memeIds,
            memeIds,
          )}
        >
          Both are ROFLable
        </button>
        {!sessionId ? <Redirect to={{ pathname: '/login' }} /> : <Fragment />}
      </div>
    );
  }
}

ChooseMeme.propTypes = {
  classes: PropTypes.object.isRequired,
  memeCouple: PropTypes.array,
  onChooseMemePageDidMount: PropTypes.func,
  onChosenMeme: PropTypes.func,
  sessionId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  history: PropTypes.object,
};


export default withRouter(connect(
  state => ({
    sessionId: state.sessionInfo.sessionId,
    memeCouple: state.memeCouple,
  }),
  dispatch => ({
    onChosenMeme: (data, sessionId) => {
      dispatch(chosenMemeAction(data, sessionId));
    },
    onChooseMemePageDidMount: () => {
      dispatch(memeCoupleAction);
    },
  })
)(injectSheet(styles)(ChooseMeme)));
