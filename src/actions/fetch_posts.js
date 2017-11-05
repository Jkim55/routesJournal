import { FETCH_POSTS } from '../constants/actions'
import { ROOT_URL, GET_ENDPOINT } from '../constants/paths'
import axios from 'axios'

export function fetchPosts() {
  const request = axios.get(GET_ENDPOINT)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
