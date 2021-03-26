import {HTTP} from './http-common';
import * as Constants from '../helper/constants';

async function login(data){
    return HTTP.post(Constants.API_LOGIN, data)
    .then(res => {
      if (res.data.token) {
        localStorage.setItem(Constants.JWT_TOKEN, res.data.token);
      }
      return res.data.userLogin;
    })
    .catch()
}

async function logout() {
  return HTTP.get(Constants.API_LOGOUT)
  .then(() => {
    localStorage.removeItem('jwt_token');
  })
}

async function getUserLogin() {
    return HTTP.get(Constants.API_GET_USER_LOGIN);
}

async function changePassword(data) {
  return HTTP.put(Constants.API_CHANGE_PASSWORD, data)
        .then(res => {
          if(res.data.token != null) {
            localStorage.setItem(Constants.JWT_TOKEN, res.data.token);
          }
        }).catch();
}

export  {
    login,
    logout,
    getUserLogin,
    changePassword
}