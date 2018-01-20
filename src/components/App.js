import React, { Component } from 'react';
import { connect } from 'react-redux';
import memeCoupleAction from '../actions/index'
class App extends Component {
  componentDidMount() {
    console.log('dispatch must has happened');
    this.props.onAppPageDidMount();
  }
  render() {
    const memes = this.props.memeCouple.map((meme) => (
      <li key={meme.id}>
        <img src={meme.url}/>
        <b>{meme.id}</b>
      </li>
    ))
    return (
      <div>
        <b>APP.js</b>
        <ul>
          {memes}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    memeCouple: state.memeCouple,
  }),
  dispatch => ({
    onAppPageDidMount: () => {
      dispatch( memeCoupleAction );
    },
  })
)(App);
