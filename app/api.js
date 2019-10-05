import axios from 'axios';
import { AsyncStorage } from 'react-native';


const setAuthorizationHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = token
}
const request = axios.create({
  baseURL: 'https://x8g5k6odfe.execute-api.eu-west-1.amazonaws.com/api/'
})

export const login = async (username, password) => {

  try {
    const { headers } = await request.post('/login', { username, password })
    const token = headers['x-amzn-remapped-authorization'];
    storeToken(token)
    setAuthorizationHeader(token)
  }
  catch (error) {
    throw error
  }

}

export const signup = async (username, password) => {
  try {
    const { headers, data } = await request.post('/signup', { username, password })
    // console.log(headers, data)
    const token = headers['x-amzn-remapped-authorization'];
    storeToken(token)
    setAuthorizationHeader(token)
  }
  catch (error) {
    console.log(error)
    throw error
  }
}
// Fhhdgjhbg username
// Gftjhvjjff6 password


export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.log(error)
  }
}

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    return token
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (error) {
    console.log(error)
  }
}



//to sign out, just delete token from asyncStorage