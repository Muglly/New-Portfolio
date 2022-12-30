import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  includes?: boolean;
};

export default function NavLink({
  title,
  path,
  includes = false,
}: NavLinkProps) {
  const router = useRouter();

  const verifyIfIsActive = () => {
    if (includes) {
      return router.pathname.includes(path);
    }

    return router.pathname === path;
  };

  const isActive = verifyIfIsActive();

  return (
    <S.NavLinkContainer isActive={isActive}>
      <Link href={path}>{title}</Link>
    </S.NavLinkContainer>
  );
}
