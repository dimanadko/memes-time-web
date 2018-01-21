import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Actions from '../actions/index';

const memeCoupleAction = Actions.memeCoupleAction;
const chosenMemeAction = Actions.chosenMemeAction;



const styles = {
  memeCouple: {
    padding: '0 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginTop: '0',
    marginBottom: '0',
    '& li': {
      border: '10px double white',
      padding: '30px 10px',
      listStyleType: 'none',
      margin: 'auto',
      marginBottom: '30px',
      marginTop: '30px',
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
    height: '100%',
    margin: 'auto',
  },
  roflAble: {
    cursor: 'pointer',
    border: '2px solid #7f8c8d',
    borderRadius: '2px',
    width: '18%',
    minWidth: '180px',
    margin: 'auto',
    backgroundColor: 'white',
    textAlign: 'center',
    opacity: '0.9',
    '&:hover': {
      opacity: '1',
    },
  },
};

class ChooseMeme extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('dispatch must has happened');
    this.props.onChooseMemePageDidMount();
  }

  handleMemeClick(id) { //Here must a post dispatch happen
    console.log(id);
    this.props.onChosenMeme(id);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.memeChooserContainer}>
        <ul className={classes.memeCouple}>
          {
            this.props.memeCouple.map(meme => (
              <li key={meme.id}>
                <img
                  src={meme.url} className={classes.memeImg}
                  onClick={this.handleMemeClick.bind(this, [meme.id])}
                />
              </li>
            ))
          }
        </ul>
        <div
          className={classes.roflAble}
          onClick={this.handleMemeClick.bind(
            this,
            this.props.memeCouple.map(meme => meme.id)
          )}
        >
          Both are ROFLable
        </div>
      </div>
    );
  }
}

ChooseMeme.propTypes = {
  classes: PropTypes.object.isRequired,
  memeCouple: PropTypes.array,
  onChooseMemePageDidMount: PropTypes.func,
  onChosenMeme: PropTypes.func,
};


export default connect(
  state => ({
    memeCouple: state.memeCouple,
  }),
  dispatch => ({
    onChosenMeme: (id) => {
      dispatch(chosenMemeAction(id));
    },
    onChooseMemePageDidMount: () => {
      dispatch(memeCoupleAction);
    },
  })
)(injectSheet(styles)(ChooseMeme));
