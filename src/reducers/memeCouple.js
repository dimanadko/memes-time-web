const initialState =  [
  {
    id: 1,
    url: 'https://media.giphy.com/media/WbE2sL5jyKqeA/giphy.gif',
  },
  {
    id: 2,
    url: 'https://media.giphy.com/media/WbE2sL5jyKqeA/giphy.gif',
  },
];

export default function links(state = initialState, action) {
  if (action.type === 'FETCH_MEME_COUPLE') {
    console.log('FETCH_MEME_COUPLE reducer');
    return action.memes;
  }
  if (action.type === 'FETCH_MEME_COUPLE_POST') {
    console.log('FETCH_MEME_COUPLE_POST reducer');
    return action.memes;
  }
  return state;
}
