import NavLink from './NavLink';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <ul>
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="Projetos" />
      </ul>
    </S.Container>
  );
}
