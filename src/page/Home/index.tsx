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
        <Link to={`/${data?.destaque.principal[0].genero}/${data?.destaque.principal[0].key}`}>
          <span 
            aria-label={`Gênero: ${data?.destaque.principal[0].genero}.`}
          >
            {data?.destaque.principal[0].genero}
          </span>
          <img 
            srcSet={`${data?.destaque.principal[0].img}, 776w`} 
            sizes="(max-width: 1024px) 100vw, 776px" 
            alt="" 
            loading='eager'
          />
          <h3>
            {data?.destaque.principal[0].titulo}
          </h3>
        </Link>
        <aside>
          {data?.destaque.secundario.map(post => (
            <Link to={`/${post.genero}/${post.key}`} key={post.key}>
              <span aria-label={`Gênero: ${post.genero}.`}>{post.genero}</span>
              <img src={post.img} alt="" width={338} height={165} loading='lazy' />
              <h3>
                {post.titulo}
              </h3>
            </Link>
          ))}
        </aside>
      </SectionPostsDestaque>

      <SectionPostsPrincipal>
        <section>
          {data?.principais.principal.map(post => (
            <PostsPrincipaisContainer tabIndex={0} key={post.key}>
              <div>
                <span aria-label={`Gênero: ${post.genero}.`}>{post.genero}</span>
                <img 
                  srcSet={`${post.img}, 200w`} 
                  sizes="(max-width: 768px) 144px, 200px" 
                  loading='lazy' 
                />
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
          <h2 tabIndex={0}>Veja mais</h2>
          <div>
            {data?.principais.secundario.map(post => (
              <Link to={`/${post.genero}/${post.key}`} key={post.key}>
                <span aria-label={`Gênero: ${post.genero}.`}>{post.genero}</span>
                <img src={post.img} alt="" width={338} height={250} loading='lazy' />
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