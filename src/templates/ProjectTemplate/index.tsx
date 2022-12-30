import { Header } from 'components/Header';
import Link from 'next/link';

import * as S from './styles';

export function ProjectTemplate() {
  return (
    <S.Container>
      <Header />
      <ProjectBanner />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi
          quae ea quasi recusandae voluptatibus exercitationem fugiat officiis
          reprehenderit! Voluptates vel reprehenderit corporis officia
          provident!
        </p>

        <button>
          <Link href="#"> Ver projeto online</Link>
        </button>
      </main>
    </S.Container>
  );
}
