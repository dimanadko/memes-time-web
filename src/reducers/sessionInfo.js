const initialState =  {
  sessionId: false,
  regStatus: 'user',
};

export default (state = initialState, action) => {
  if (action.type === 'POST_LOGIN_INFO') {
    return action.data;
  }
  return state;
};
