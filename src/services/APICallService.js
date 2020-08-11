import axios from 'axios';
import { authToken } from 'services/sessionServices';

export const httpPost = (apiPath, body, userToken) => {
  return axios
    .post(
      `https://edu-api.chop-chop.org/${apiPath}`,
      { ...body },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Token': userToken || authToken,
        },
      }
    )
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const httpGet = (apiPath, userToken) => {
  return axios
    .get(`https://edu-api.chop-chop.org/${apiPath}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': userToken || authToken,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
