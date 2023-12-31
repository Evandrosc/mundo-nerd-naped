import { MenuIconContainer } from './styles'

export function MenuIcon ({ activeNavbar, onActiveNavbar }) {
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
  );
}