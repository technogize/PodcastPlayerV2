import axios from 'axios';
import { REQUEST_PROXY } from './constants';

export default (url, callback) => {
  axios({
    method: 'get',
    url: `${REQUEST_PROXY}${url}`
  })
    .then(response => {
      console.log(response.data.items);
      callback(response.data.items);
    })
    .catch(err => {
      console.info(err);
    });
};
