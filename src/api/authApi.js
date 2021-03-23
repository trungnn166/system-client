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

const logout = () => {
  localStorage.removeItem('jwt_token');
}

async function getUserLogin() {
    return HTTP.get(Constants.API_GET_USER_LOGIN);
}
export  {
    login,
    logout,
    getUserLogin
}