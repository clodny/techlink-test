import axios from 'axios';

class Service {
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    return Promise.reject(error)
  }
  
  get(path, params, callback) {
    return this.service.get(path, { 
      params,
      headers: {
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('auth')).token}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      (response) => callback ? callback(response.status, response.data) : response
    );
  }

  getBlob(path, params, callback) {
    return this.service.get(path, {
      params,
      responseType: 'blob',
      headers: {
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('auth')).token}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      (response) => callback ? callback(response.status, response.data) : response
    );
  }

  patch(path, payload, callback) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
      headers: {
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('auth')).token}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => callback ? callback(response.status, response.data) : response);
  }

  post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
      headers: {
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('auth')).token}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => callback ? callback(response.status, response.data) : response);
  }

  delete(path, payload, callback) {
    return this.service.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
      data: payload,
      headers: {
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('auth')).token}`,
        'Access-Control-Allow-Origin': '*'
    }
    }).then((response) => callback ? callback(response.status, response.data) : response);
  }
}

export default new Service();