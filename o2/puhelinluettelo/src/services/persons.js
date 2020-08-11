import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons/';

const getAll = () => {
    return axios.get(baseUrl).then(res => res.data);
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson);
}

const del = (id) => {
    return axios.delete(baseUrl + id);
}

const update = (id, newObj) => {
    return axios.put(baseUrl + id, newObj);
}

export default { 
    getAll,
    create,
    del,
    update
  }