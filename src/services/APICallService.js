// const APICallService = (url, { method, body }) => {
//   return axios
//     .request(url, {
//       username: user.login,
//       password: user.password,
//     })
//     .then((response) => response.data)
//     .catch((err) => {
//       throw err;
//     });
// };
import axios from 'axios';
import { authToken } from 'services/sessionServices';
// export const callAPI = (url, { method, body }) => {
//   axios({
//     url,
//     method,
//     data: body,
//     headers: {
//       'X-Token': sessionStorage.getItem('token'),
//     },
//   }).then((response) => {
//     return response.data;
//   });
// };

// export const httpPost = (url, config = {}) =>
//   callAPI(url, { ...config, method: HTTP_METHODS.post });

export const httpPost = (apiPath, body) => {
  return axios
    .post(`https://edu-api.chop-chop.org/${apiPath}`, {
      ...body,
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const httpGet = (apiPath) => {
  return axios
    .get(`https://edu-api.chop-chop.org/${apiPath}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': authToken,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
