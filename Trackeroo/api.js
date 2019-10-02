import axios from 'axios';

const request = axios.create({
  baseURL: ''
})

//should this be a get request, and if not 0, then send back the user obj with info of age, height etc?
export const checkExistingUser = () => {
  return request.post('').then(({ data }) => {
    return data
  })
}