/**
 * Sets current playing track
 *
 * Sample:
  {
    title: '-',
    url: '-',
    author: '-',
    link: '-',
    guid: ''
  }
 */

export default data => {
  return {
    type: 'NOW_PLAYING',
    payload: data
  };
};
