import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const memesArray = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr0w0RJMGJTLlyKedP9Sf_FzZRRIVMi3QqHHP0lVY8tkjZoQroA',
    _id: 1,
    rating: 15,
  },
  {
    url: 'https://www.saturdaydownsouth.com/wp-content/uploads/2017/09/21764969_10214625654178963_2740357915962522351_n-1-718x490.jpg',
    _id: 2,
    rating: 3,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvtRdDaNhI8VPJJVeP7Qp4RCan-sjTtvoxuENP6dI96AWnusXLQ',
    _id: 3,
    rating: 10,
  },
  {
    url: 'http://memepedia.ru/wp-content/uploads/2017/05/25b86b8679748c4e23b34996b8fa0153.jpg',
    _id: 4,
    rating: 20,
  },
  {
    url: 'http://www.abc.net.au/news/image/7797710-1x1-940x940.jpg',
    _id: 5,
    rating: 1,
  },
  {
    url: 'https://heavyeditorial.files.wordpress.com/2017/08/screen-shot-2017-08-18-at-12-42-31-pm.jpg?quality=65&strip=all&strip=all',
    _id: 6,
    rating: 23,
  },
];

const styles = {
  statsContainer: {
    padding: '30px 10%',
    backgroundColor: '#ecf0f1',
  },
  table: {
    height: '530px',
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
    height: '30px',
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

const sortFunction = (a, b) => b.rating - a.rating;

memesArray.sort(sortFunction);

class StatsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    memesArray.sort(sortFunction);
  }

  render() {
    const { classes } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = memesArray.map(meme => meme.url);
    console.log(images);
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
              memesArray.map(meme => (
                <li className={classes.listRow} key={meme._id}>
                  <div className={classes.memeImg}>
                    <img
                      className={classes.image}
                      src={meme.url}
                      onClick={() => {
                        console.log('isOpen: true');
                        this.setState({ isOpen: true });
                      }}
                    />
                  </div>
                  <div className={classes.url}>
                    <a href={meme.url} className={classes.a}>{meme.url}</a>
                  </div>
                  <div className={classes.memeRate}>
                    <span>{meme.rating}</span>
                  </div>
                </li>
              ))
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
};


export default injectSheet(styles)(StatsList);

/*import LoginForm from './components/LoginForm.js';
import StatsList from './components/Stats.js';
<Route exact path="/stats" component={StatsList} />*/
