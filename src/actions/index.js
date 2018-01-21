// import getMemeCpouple from '../api';

const Actions = {
  memeCoupleAction: (dispatch) => {
    console.log('memeCoupleAction');
    const promise = new Promise((resolve) => {
      setTimeout(
        () => resolve({
          type: 'FETCH_MEME_COUPLE',
          memes: [
            {
              id: 1,
              url: 'https://i.redditmedia.com/Ara_qc1bxuYpcZCKGrS2BvAiPfrMzvjG4oSUPBbBvDc.jpg?s=eba550a040588e7996d7b7ed750823b1',
            },
            {
              id: 2,
              url: 'https://i.redditmedia.com/e4NTkVHbzIm3Vt_qmbyIlYtUT9AnI08rpCL11vKruXU.jpg?s=5a233a6be970ee9e624ba68423b90b6d',
            },
          ],
        }), 1000
      );
    });
    promise.then(
      result => (dispatch(result))
    );
  },

  chosenMemeAction: id => (dispatch) => {
    console.log('memeCoupleAction' + id);
    const promise = new Promise((resolve) => {
      setTimeout(
        () => resolve({
          type: 'FETCH_MEME_COUPLE_POST',
          memes: [
            {
              id: 3,
              url: 'https://i.redditmedia.com/Ara_qc1bxuYpcZCKGrS2BvAiPfrMzvjG4oSUPBbBvDc.jpg?s=eba550a040588e7996d7b7ed750823b1',
            },
            {
              id: 4,
              url: 'https://i.redditmedia.com/e4NTkVHbzIm3Vt_qmbyIlYtUT9AnI08rpCL11vKruXU.jpg?s=5a233a6be970ee9e624ba68423b90b6d',
            },
          ],
        }), 1000
      );
    });
    promise.then(
      result => (dispatch(result))
    );
  },
};

export default Actions;
