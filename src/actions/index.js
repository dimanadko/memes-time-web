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
              id: '5a65dcf5fac3122588a47849',
              url: 'https://i.redditmedia.com/Ara_qc1bxuYpcZCKGrS2BvAiPfrMzvjG4oSUPBbBvDc.jpg?s=eba550a040588e7996d7b7ed750823b1',
            },
            {
              id: '5a65dcf5fac3122588a4784a',
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

  chosenMemeAction: (data, sessionId) => (dispatch) => {
    console.log('memeCoupleAction' + data);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
        data,
      }),
      headers,
    };

    fetch('/getMemes', myInit).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        const memes = result['frontMemes'].map(meme => ({
          'id': meme._id,
          'url': meme.url,
        }));
        const dispatchAbleMeme = {
          type: 'FETCH_MEME_COUPLE_POST',
          memes,
        };
        console.log(dispatchAbleMeme);
        dispatch(dispatchAbleMeme);
      }
    ).catch(err => console.log(err));
  },

  signInAction: (nickname, password) => (dispatch) => {
    const promise = new Promise((resolve) => {
      console.log({ nickname, password });
      setTimeout(
        () => resolve({
          type: 'POST_LOGIN_INFO',
          data: {
            sessionId: '12345',
            regStatus: 'authorized',
          },
        }), 1000
      );
    });
    promise.then(res => (dispatch(res)));
  },

};

export default Actions;
