import { SectionTitle } from 'components/SectionTitle';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import * as S from './styles';

export function Project() {
  return (
    <S.Container>
      <SectionTitle title="#Ultimos Projetos" />
      <section>
        <ProjectItem
          title="Proleto 1"
          type="Website"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          slug="/projects"
        />
        <ProjectItem
          title="Proleto 2"
          type="Website"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          slug="/projects"
        />
        <ProjectItem
          title="Proleto 3"
          type="Website"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          slug="/projects"
        />
      </section>
      <button>
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </S.Container>
  );
}
