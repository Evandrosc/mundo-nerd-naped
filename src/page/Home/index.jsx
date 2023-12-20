import { PostRecentes } from '../../components/PostRecentes'

import { Link } from 'react-router-dom'

import {
  PostsPrincipaisContainer,
  SectionContainer,
  SectionPostsDestaque,
  SectionPostsPrincipal
} from './styles'
import { useGetPosts } from '../../hooks/useGetPosts'

export function Home() {

  const { data } = useGetPosts()

  return (
    <>
      <SectionContainer>
        <h1>Mundo nerd? Naped!</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </SectionContainer>

      <SectionPostsDestaque>
        <Link to={`/${data.destaque.principal[0].genero}/${data.destaque.principal[0].key}`}>
          <span>{data.destaque.principal[0].genero}</span>
          <img src={`../../../public/image/${data.destaque.principal[0].img}.png`} alt="" />
          <h3>
            {data.destaque.principal[0].titulo}
          </h3>
        </Link>
        <aside>
          {data.destaque.secundario.map(post => (
            <Link to={`/${post.genero}/${post.key}`} key={post.key}>
              <span>{post.genero}</span>
              <img src={`../../../public/image/${post.img}.png`} alt="" />
              <h3>
                {post.titulo}
              </h3>
            </Link>
          ))}
        </aside>
      </SectionPostsDestaque>

      <SectionPostsPrincipal>
        <section>
          {data.principais.principal.map(post => (
            <PostsPrincipaisContainer key={post.key}>
              <div>
                <span>{post.genero}</span>
                <img src={`../../../public/image/${post.img}.png`} alt="" />
              </div>
              <div>
                <h3>
                  {post.titulo}
                </h3>
                <p>
                  {post.resumo}
                </p>
                <time dateTime={`${post.data.ano}-${post.data.mes}-${post.data.dia}`}>{post.data.dia}/{post.data.mes}/{post.data.ano}</time>
                <Link to={`/${post.genero}/${post.key}`}>Ler notícia</Link>
              </div>
            </PostsPrincipaisContainer>
          ))}
        </section>
        <aside>
          <h2>Veja mais</h2>
          <div>
            {data.principais.secundario.map(post => (
              <Link to={`/${post.genero}/${post.key}`} key={post.key}>
                <span>{post.genero}</span>
                <img src={`../../../public/image/${post.img}.png`} alt="" />
                <h3>
                  {post.titulo}
                </h3>
              </Link>
            ))}
          </div>
        </aside>
      </SectionPostsPrincipal>

      <PostRecentes />
    </>
  )
}