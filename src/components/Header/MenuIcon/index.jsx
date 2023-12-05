import { MenuIconContainer } from './styles'

export function MenuIcon ({ activeNavbar, onActiveNavbar }) {
  return (
    <MenuIconContainer 
      $isActiveNavbar={activeNavbar} 
      onClick={() => onActiveNavbar(active => !active)} 
    >
      <div />
      <div />
      <div />
    </MenuIconContainer>
  );
}