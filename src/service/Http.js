const BASE_API_URL =
  `https://cors-anywhere.herokuapp.com/` + process.env.REACT_APP_BASE_API_URL;
const USER_TOKEN = process.env.REACT_APP_USER_TOKEN;

const HTTP_RESPONSE_OK = 200;
const HTTP_RESPONSE_CREATED = 201;

export const get = (uri) =>
  fetch(BASE_API_URL + uri, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + USER_TOKEN,
    },
  }).then((response) => {
    const res = response.json();
    if (
      response.status === HTTP_RESPONSE_OK ||
      response.status === HTTP_RESPONSE_CREATED
    )
      return res;
    throw new Error("Operation Failed.");
  });

export const post = (uri, data) =>
  fetch(BASE_API_URL + uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + USER_TOKEN,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    const res = response.json();
    if (
      response.status === HTTP_RESPONSE_OK ||
      response.status === HTTP_RESPONSE_CREATED
    )
      return res;
    throw new Error("Operation Failed.");
  });
