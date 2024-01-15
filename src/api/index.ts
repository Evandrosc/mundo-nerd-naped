import axios from 'axios'
import { Post } from '../@types/post'

interface DadosPosts {
  destaque: {
    principal: [
      Post
    ]
    secundario: [
      Post
    ]
  }
  principais: {
    principal: [
      Post
    ]
    secundario: [
      Post
    ]
  }
  recentes: [
    Post
  ]
}

// hospedagem json ".mockable.io"

const BASE_URL = 'https://demo3711747.mockable.io'

export async function getPosts(): Promise<DadosPosts> {
  return (await axios.get(BASE_URL)).data
}