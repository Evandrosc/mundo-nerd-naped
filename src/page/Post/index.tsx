import { useListAllPosts } from '../../hooks/useListAllPosts'
import { useParams } from 'react-router-dom'
import { Conteudo, ImgContainer, Paragrafo, Time, Titulo } from './styles'
import { PostRecentes } from '../../components/PostRecentes'


export function Post() {
  scrollTo(0, 0)

  const { id } = useParams()

  const allPosts = useListAllPosts()

  const post  = allPosts?.find(post => post.key === Number(id))

  return (
    <>
      <Titulo tabIndex={0}>{post?.titulo}</Titulo>
      <Paragrafo tabIndex={0}>{post?.resumo}</Paragrafo>
      <Time tabIndex={0} dateTime={`${post?.data.ano}-${post?.data.mes}-${post?.data.dia}`}>{post?.data.dia}/{post?.data.mes}/{post?.data.ano}</Time>

      <ImgContainer>
        <span>{post?.genero}</span>
        <img src={post?.img} alt="" />
      </ImgContainer>

      <Conteudo tabIndex={0}>{post?.conteudo}</Conteudo>

      <PostRecentes />
    </>
  )
}