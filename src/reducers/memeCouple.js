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
  console.log('memeCouple reducer');
  if (action.type === 'FETCH_MEME_COUPLE') {
    return action.memes;
  }
  return state;
}
