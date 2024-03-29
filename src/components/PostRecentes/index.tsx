import { useGetPosts } from '../../hooks/useGetPosts'
import { PostsRecentesContainer } from './styles'
import { Link } from 'react-router-dom'

import { Post } from '../../@types/post'

export function PostRecentes() {

  const { data } = useGetPosts()

  return (
    <PostsRecentesContainer>
      <h2 tabIndex={0}>Notícias mais recentes</h2>
      <div>
        {data?.recentes.map((post: Post) => (
          <Link to={`/${post.genero}/${post.key}`} key={post.key}>
            <span aria-label={`Gênero: ${post.genero}.`}>{post.genero}</span>
            <img 
              srcSet={`${post.img}, 622w`} 
              sizes="(max-width: 696px) 100vw, 339px"
              loading='lazy' 
              alt="" 
            />
            <h3>
              {post.titulo}
            </h3>
          </Link>
        ))}
      </div>
    </PostsRecentesContainer>
  )
}