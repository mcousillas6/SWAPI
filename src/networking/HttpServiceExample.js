/** 
  =========================================
  +This should be used ONLY as an example +
  +Feel free to use fetch or other library+
  +The goal of this class is to act as a  +
  +facade to hide the current networking  +
  + implementation                        +
  =========================================
*/

import axios from 'axios';

import { UserStore } from 'frog/src/store';
import { API_URL } from 'frog/src/config/environment';

class HttpService {
  constructor() {
    this.instance = axios.create({ baseURL: API_URL, headers: {} });
    const user = UserStore.getOne();
    if (user) {
      this.token = user.token;
    }
  }

  get token() {
    return this.instance.defaults.headers.Authorization;
  }

  set token(token) {
    this.instance.defaults.headers.Authorization = token;
  }

  deleteToken() {
    delete this.instance.defaults.headers.Authorization;
  }

  put(...args) {
    return this.instance.put(...args);
  }

  get(...args) {
    return this.instance.get(...args);
  }

  delete(...args) {
    return this.instance.delete(...args);
  }

  post(...args) {
    return this.instance.post(...args);
  }
}

export default new HttpService();
