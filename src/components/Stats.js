import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import { connect } from 'react-redux';

import Actions from '../actions/index';

const getMemesStats = Actions.getMemesStats;




const styles = {
  statsContainer: {
    padding: '2vh 10%',
    backgroundColor: '#ecf0f1',
    height: '74vh',
  },
  table: {
    height: '70vh',
    backgroundColor: '#ffff',
    overflowY: 'visible',
    overflowX: 'hidden',
    width: '100%',
  },
  listRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    borderTop: '3px solid #ecf0f1',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    height: '3vh',
    margin: 'auto',
    background: '#2980b9',
    '& >:last-child': {
      borderRight: '0',
    },
  },
  headerComponent: {
    width: '100%',
    height: 'inherit',
    margin: 'auto',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    boxSizing: 'border-box',
    borderRight: '1px solid #ecf0f1',
  },
  url: {
    width: '100%',
    height: '100px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    borderRight: '3px solid #ecf0f1',
    borderLeft: '3px solid #ecf0f1',
    '& a': {
      color: '#2c3e50',
      textDecoration: 'none',
    },
    '& :visited': {
      color: '#c0392b',
    },
  },
  ul: {
    padding: '0',
    margin: '0',
    '& >:first-child': {
      borderTop: '0',
    },
  },
  memeImg: {
    width: '100%',
    height: '100px',
    boxSizing: 'border-box',
  },
  image: {
    border: '5px double #2c3e50',
    height: '90%',
  },
  memeRate: {
    paddingTop: '34px',
    width: '100%',
    height: '100px',
    boxSizing: 'border-box',
    fontSize: '25px',
    color: 'black',
  },
};



class StatsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.props.onStatsPageDidMount();
  }

  handleImgClick = index => () => {
    console.log('isOpen: true; index: ' + index);
    this.setState({
      isOpen: true,
      photoIndex: index,
    });
  }

  render() {
    const { classes, memesArray } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = memesArray.map(meme => meme.url);
    const memeLi = memesArray.map((meme, i) => (
      <li className={classes.listRow} key={meme._id}>
        <div className={classes.memeImg}>
          <img
            className={classes.image}
            src={meme.url}
            onClick={this.handleImgClick(i)}
          />
        </div>
        <div className={classes.url}>
          <a href={meme.url} className={classes.a}>{meme.url}</a>
        </div>
        <div className={classes.memeRate}>
          <span>{meme.rating}</span>
        </div>
      </li>
    ));
    return (
      <div className={classes.statsContainer}>

        <div className={classes.header}>
          <div className={classes.headerComponent}>
            <span>ROFL picture</span>
          </div>
          <div className={classes.headerComponent}>
            <span>Meme URL</span>
          </div>
          <div className={classes.headerComponent}>
            <span>Meme rating</span>
          </div>
        </div>

        <div className={classes.table}>
          <ul className={classes.ul}>
            {
              memeLi
            }
          </ul>
        </div>
        {(isOpen) ?  (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
            }
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
            }
          />
        ) : <Fragment />}
      </div>
    );
  }
}

StatsList.propTypes = {
  classes: PropTypes.object.isRequired,
  onStatsPageDidMount: PropTypes.func,
  memesArray: PropTypes.array,
};


export default connect(
  state => ({
    memesArray: state.memesStats,
  }),
  dispatch => ({
    onStatsPageDidMount: () => {
      dispatch(getMemesStats);
    },
  })
)(injectSheet(styles)(StatsList));

/*import LoginForm from './components/LoginForm.js';
import StatsList from './components/Stats.js';
<Route exact path="/stats" component={StatsList} />*/
