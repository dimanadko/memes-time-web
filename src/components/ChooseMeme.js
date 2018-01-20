import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import memeCoupleAction from '../actions/index';

const styles = {
  memeCouple: {
    padding: '0 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& li': {
      borderRadius: '10px',
      padding: '30px 10px',
      listStyleType: 'none',
      margin: 'auto',
      marginBottom: '30px',
      marginTop: '30px',
      backgroundColor: '#3498db',
    },
  },
  memeImg: {
    height: '400px',
    verticalAlign: 'center',
    // '&:hover': {
    //   filter: 'blur(5px)',
    //   transition: '0.2s',
    // },
  },
  memeChooserContainer: {
    height: '100%',
    margin: 'auto',
  },
};

class ChooseMeme extends Component {
  constructor(props) {
    super(props);
    // this.handleMemeClick = this.handleMemeClick.bind(this);
  }

  componentDidMount() {
    console.log('dispatch must has happened');
    this.props.onChooseMemePageDidMount();
  }

  handleMemeClick() { //Here must a post dispatch happen
    console.log('Clicked');
  }

  render() {
    const { classes } = this.props;
    const memes = this.props.memeCouple.map(meme => (
      <li key={meme.id}>
        <button onClick={this.handleMemeClick}>
          <img src={meme.url} className={classes.memeImg} />
        </button>
      </li>
    ));
    return (
      <div className={classes.memeChooserContainer}>
        <ul className={classes.memeCouple}>
          {memes}
        </ul>
      </div>
    );
  }
}

ChooseMeme.propTypes = {
  classes: PropTypes.object.isRequired,
  memeCouple: PropTypes.array,
  onChooseMemePageDidMount: PropTypes.func,
};


export default connect(
  state => ({
    memeCouple: state.memeCouple,
  }),
  dispatch => ({
    onChooseMemePageDidMount: () => {
      dispatch(memeCoupleAction);
    },
  })
)(injectSheet(styles)(ChooseMeme));
