import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

export type NavLinkProps = {
  title: string;
  path: string;
};

export default function NavLink({ title, path }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <S.NavLinkContainer isActive={isActive}>
      <Link href={path}>{title}</Link>
    </S.NavLinkContainer>
  );
}
