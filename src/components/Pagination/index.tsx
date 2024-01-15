import { btnPrevPosts } from '../../assets/btnPrevPosts.tsx'
import { btnNextPosts } from '../../assets/btnNextPost.tsx'
import { Button, SectionContainer } from './styles.ts'

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: (callback: number) => void
}

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  const current = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(total / limit)
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1)
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  )

  function onPageChange(page: number) {
    setOffset((page - 1) * limit)
  }

  return (
    <SectionContainer tabIndex={0} aria-label='Paginação'>
      <Button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        aria-label='Voltar para notícias anteriores'
      >
        {btnPrevPosts}
      </Button>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            $active={page === current}
          >
            {page}
          </Button>
        ))}
      <Button
        onClick={() => onPageChange(current + 1)}
        disabled={current === pages}
        aria-label='Ir para próximas notícias'
      >
        {btnNextPosts}
      </Button>
    </SectionContainer>
  )
}