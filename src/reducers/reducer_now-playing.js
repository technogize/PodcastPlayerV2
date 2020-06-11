const defaultData = {
  title: '-',
  url: '-',
  author: '-',
  link: '-',
  guid: ''
};

// eslint-disable-next-line import/prefer-default-export
export const nowPlaying = (state = defaultData, action) => {
  if (action.type === 'NOW_PLAYING') {
    return action.payload;
  }

  return state;
};
