import NavLink from './NavLink';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <ul>
        <NavLink path="/" title="Home" />
        <NavLink path="/projects" title="Projetos" />
      </ul>
    </S.Container>
  );
}
