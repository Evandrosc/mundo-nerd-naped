import axios from 'axios'

// hospedagem json ".mockable.io"

const BASE_URL = 'https://demo3711747.mockable.io'

export async function getPosts() {
  return (await axios.get(BASE_URL)).data
}