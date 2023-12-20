import { useListAllPosts } from '../../hooks/useListAllPosts'
import { useParams } from 'react-router-dom'
import { Conteudo, ImgContainer, Paragrafo, Time, Titulo } from './styles'
import { PostRecentes } from '../../components/PostRecentes'


export function Post() {
  scrollTo(0, 0)

  const { id } = useParams()

  const { conteudo, data, genero, img, resumo, titulo } = useListAllPosts()
    .find(post => post.key == Number(id))

  return (
    <>
      <Titulo>{titulo}</Titulo>
      <Paragrafo>{resumo}</Paragrafo>
      <Time dateTime={`${data.ano}-${data.mes}-${data.dia}`}>{data.dia}/{data.mes}/{data.ano}</Time>

      <ImgContainer>
        <span>{genero}</span>
        <img src={img} alt="" />
      </ImgContainer>

      <Conteudo>{conteudo}</Conteudo>

      <PostRecentes />
    </>
  )
}