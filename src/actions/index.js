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
        console.log(result);
        if (result.error) {
          alert('Your session time is out. Need authorization!');
          dispatch({
            type: 'LOG_OUT',
          });
        }
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

    console.log('signInAction: ' + nickname + ' : ' + password);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        credentials: {
          login: nickname,
          password,
        },
      }),
      headers,
    };

    fetch('/loginVerify', myInit).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        if (!result.authenticated.sessionId) {
          alert('You need to log in!');
        }
        const dispatchAbleSessionInfo = {
          type: 'POST_LOGIN_INFO',
          data: result.authenticated,
        };
        console.log(dispatchAbleSessionInfo);
        dispatch(dispatchAbleSessionInfo);
      }
    ).catch(err => console.log(err));
  },

  registrationAction: (nickname, password) => (dispatch) => {

    console.log('registrationAction: ' + nickname + ' : ' + password);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        credentials: {
          login: nickname,
          password,
        },
      }),
      headers,
    };

    fetch('/handleRegistration', myInit).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        const dispatchAbleSessionInfo = {
          type: 'POST_LOGIN_INFO',
          data: result,
        };
        console.log(dispatchAbleSessionInfo);
        dispatch(dispatchAbleSessionInfo);
      }
    ).catch(err => console.log(err));
  },
  logOutAction: {
    type: 'LOG_OUT',
  },
  getMemesStats: (dispatch) => {
    fetch('/getMemesStats').then((response) => {
      console.log('getMemesStats Fetched');
      return response.json();
    }).then(
      (result) => {
        const dispatchAbleMemesStats = {
          type: 'FETCH_MEME_STATS',
          data: result.memes.sort((a, b) => b.rating - a.rating),
        };
        dispatch(dispatchAbleMemesStats);
      }
    );
  },
};

export default Actions;
