const initialState =  [
  {
    id: 123,
    url: "https://i.redditmedia.com/Ara_qc1bxuYpcZCKGrS2BvAiPfrMzvjG4oSUPBbBvDc.jpg?s=eba550a040588e7996d7b7ed750823b1",
  },
  {
    id: 124,
    url: "https://i.redditmedia.com/e4NTkVHbzIm3Vt_qmbyIlYtUT9AnI08rpCL11vKruXU.jpg?s=5a233a6be970ee9e624ba68423b90b6d",
  },
];

export default function links(state = initialState, action) {
  console.log('memeCouple reducer');
  if (action.type === 'FETCH_MEME_COUPLE') {
    return action.memes;
  }
  return state;
}
