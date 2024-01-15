import { MenuIconContainer } from './styles'

interface MenuIconProps {
  activeNavbar: boolean
  onActiveNavbar: (callback: (active: boolean) => boolean) => void
}

export function MenuIcon ({ activeNavbar, onActiveNavbar }: MenuIconProps) {
  return (
    <MenuIconContainer 
      $isActiveNavbar={activeNavbar} 
      onClick={() => onActiveNavbar(active => !active)}
      role='button'
      aria-label={activeNavbar ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
      tabIndex={0}
    >
      <div />
      <div />
      <div />
    </MenuIconContainer>
  )
}