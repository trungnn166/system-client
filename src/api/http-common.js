import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: authHeader()
})

function authHeader() {
  let token = localStorage.getItem('jwt_token');

  let headers =  {
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
  }

  if (token != null) {
    headers['Authorization'] = 'Bearer ' + token;
  } 

  return headers;
}
