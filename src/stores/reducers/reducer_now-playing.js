// eslint-disable-next-line import/prefer-default-export
export const nowPlaying = (state = {}, action) => {
  if (action.type === 'NOW_PLAYING') {
    return action.payload;
  }

  return state;
};
