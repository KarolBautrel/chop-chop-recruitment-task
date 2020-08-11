import axios from 'axios';
import { authToken } from 'services/sessionServices';
import { apiURL } from 'utils/apiConfig';

export const httpPost = (apiPath, body, userToken) => {
  return axios
    .post(
      `${apiURL}${apiPath}`,
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
    .get(`${apiURL}${apiPath}`, {
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
