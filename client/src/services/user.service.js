import axios from 'axios';

class UserDataService {
  create(data) {
    return axios.post('/users', data);
  }
  show(id) {
    return axios.get('/users');
  }
  find(email) {
    return axios.get('/users?email=${email}');
  }
  update(id, data) {
    return axios.put('/users/${id}', data);
  }  
  delete(id) {
    return axios.delete('/users/${id}');
  }
}

export default new UserDataService();