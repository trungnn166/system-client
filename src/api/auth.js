import {HTTP} from './http-common';

const login = (data) => {
    HTTP.post('login', {body: data})
    .then(response => {
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
}

export  {
    login
}