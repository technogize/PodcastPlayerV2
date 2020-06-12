/**
 * Sets current playing track
 *
 * Sample:
  {
    title: '-',
    url: '-',
    author: '-',
    mp3url: '-',
    guid: ''
  }
 */

export default data => {
  return {
    type: 'NOW_PLAYING',
    payload: data
  };
};
