import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import * as S from './styles';

export default function ProjectItem() {
  return (
    <S.ProjectContainer>
      <section>
        <div className="overlay" />
        <div>
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>
      <button>
        <Link href="/projetos">
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </S.ProjectContainer>
  );
}
