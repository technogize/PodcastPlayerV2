import axios from 'axios';
import { REQUEST_PROXY } from './constants';

export default (url, callback) => {
  axios({
    method: 'get',
    url: `${REQUEST_PROXY}${url}`
  })
    .then(response => {
      callback(response.data);
    })
    .catch(err => {
      console.info(err);
    });
};
