const initialState =  [
  {
    url: 'https://media.giphy.com/media/WbE2sL5jyKqeA/giphy.gif',
    _id: 0,
    rating: 0,
    usersWatched: 0,
  },
];

export default function memesStats(state = initialState, action) {
  if (action.type === 'FETCH_MEME_STATS') {
    console.log('FETCH_MEME_STATS reducer');
    return action.data;
  }
  return state;
}
