import axios from 'axios';

const request = axios.create({
  baseURL: ''
})

export const checkExistingUser = () => {
  return request.get('').then(({ data }) => {
    return data
  })
}

export const addNewUser = () => {
  return request.post('').then(({ data }) => {
    return data
  })
}