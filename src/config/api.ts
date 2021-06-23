const dev_server = 'http://localhost:4001';
const dep_server = 'https://letters-heroku.herokuapp.com';
const deployAndDev = () =>
  window.location.host === 'localhost:3000' ? dev_server : dep_server;
export const api = {
  GET_LETTER: `${deployAndDev()}/api/letters`,
  DELETE_LETTER: `${deployAndDev()}/api/letters`,
  POST_REPLY_SUBMIT: `${deployAndDev()}/api/comments/`,
};
