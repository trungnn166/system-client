import {HTTP} from './http-common';
import * as Constants from '../helper/constants';

const login = (data) => {
    HTTP.post(Constants.API_LOGIN, data)
    .then(res => {
      if (res.data.token) {
        localStorage.setItem(Constants.JWT_TOKEN, res.data.token);
      }
      return;
    })
    .catch(e => {
      console.log(e);
    })
}

const logout = () => {
  localStorage.removeItem('jwt_token');
}

const getUserLogin = () => {
    HTTP.get(Constants.API_GET_USER_LOGIN);
}
export  {
    login,
    logout,
    getUserLogin
}