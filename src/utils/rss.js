import axios from 'axios';
import { REQUEST_PROXY } from './constants';

export default (url, callback) => {
  axios({
    method: 'get',
    url: `${REQUEST_PROXY}${url}`,
    headers: {
      'Cache-Control': 'public, max-age=10'
    }
  })
    .then(response => {
      callback(response.data);
    })
    .catch(err => {
      console.info(err);
    });
};
