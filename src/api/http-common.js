import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Authorization':'Bearer ' + window.localStorage.getItem('token_name_here'),
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})