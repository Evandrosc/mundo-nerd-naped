import { useState, useEffect } from 'react'
import { ContainerPosts, Genero, SectionTop, FormFilterPost, Titulo, Error } from './styles'
import { Link } from 'react-router-dom'
import { btnSearch } from '../../assets/search'
import { Pagination } from '../../components/Pagination'
import { useFilterPosts } from '../../hooks/useFilterPosts'

import { Post } from '../../@types/post'

interface ListPostsProps {
  gender: string
}

interface FormEventProps extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    search: {
      value: string
    }
    reset: () => void
  }
}

const maxPost = 6

export function ListPosts({ gender }: ListPostsProps) {
  const listPosts = useFilterPosts(gender)
  const [postsDisplayed, setPostsDisplayed] = useState<Post[]>([])
  const [postNotFound, setPostNotFound] = useState(false)
  const [offset, setOffset] = useState(0)
  const [genrePrevious, setGenrePrevious] = useState(gender)

  useEffect(() => {
    if (gender !== genrePrevious) {
      setOffset(0)
      setGenrePrevious(gender)
    }

    if (postNotFound) {
      setPostNotFound(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender])

  useEffect(() =>
    setPostsDisplayed(listPosts?.slice(offset, offset + maxPost) || []), [gender, listPosts, offset])

  function handleSubmit(e: FormEventProps) {
    e.preventDefault()
    const value = e.target.search.value.toLowerCase()

    if (value) {
      const filteredPosts = listPosts?.filter(post => post.titulo.toLowerCase().includes(value)) || []

      if (!filteredPosts.length) {
        setPostNotFound(true)
        e.target.reset()
        return
      }

      if (postNotFound && filteredPosts.length) {
        setPostNotFound(false)
      }

      setPostsDisplayed(filteredPosts)
      e.target.reset()
      return
    }

    if (postNotFound) {
      setPostNotFound(false)
    }

    const postsPagination = listPosts?.slice(offset, offset + maxPost)

    setPostsDisplayed(postsPagination ? postsPagination : [])

    e.target.reset()
  }

  if (!postsDisplayed.length) return

  return (
    <>
      <SectionTop>
        {listPosts ? <img src={listPosts[0].img} alt="" /> : null}
        <div>
          <h1>{gender}</h1>
          <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
        </div>
      </SectionTop>
      <FormFilterPost onSubmit={handleSubmit}>
        <input
          type='search'
          name='search'
          placeholder='Quer ajuda na procura? Pesquise aqui'
        />
        <button
          type='submit'
          title='pesquisar post'
        >
          {btnSearch}
        </button>
      </FormFilterPost>
      {postNotFound && <Error>Notícia não encontrada</Error>}
      <ContainerPosts
        tabIndex={0}
        aria-label={postNotFound ? 'Nenhuma notícia referente ao filtro encontrada' : 'Lista de notícias'}
      >
        {postsDisplayed.map(post => (
          <Link
            key={post.key}
            to={`/${post.genero}/${post.key}`}
          >
            <Genero aria-label={`Gênero: ${post.genero}.`}>
              {post.genero}
            </Genero>
            <img src={post.img} alt="" />
            <Titulo>{post.titulo}</Titulo>
          </Link>
        ))}
      </ContainerPosts>
      {listPosts
        ? listPosts.length > maxPost &&
          <Pagination
            limit={maxPost}
            total={listPosts.length}
            offset={offset}
            setOffset={setOffset}
          />
        : null
      }
    </>
  )
}