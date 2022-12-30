import Link from 'next/link';
import { Header } from 'components/Header';
import { ProjectBanner } from 'components/ProjectBanner';

import * as S from './styles';

export function ProjectTemplate() {
  return (
    <S.Container>
      <Header />
      <ProjectBanner
        title="Projeto 1"
        type="Website"
        imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi
          quae ea quasi recusandae voluptatibus exercitationem fugiat officiis
          reprehenderit! Voluptates vel reprehenderit corporis officia
          provident!
        </p>

        <div>
          <button>
            <Link href="#"> Ver projeto online</Link>
          </button>
          <button>
            <Link href="#"> Ver repsitório</Link>
          </button>
        </div>
      </main>
    </S.Container>
  );
}
