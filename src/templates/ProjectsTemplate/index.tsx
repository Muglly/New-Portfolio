import { Header } from 'components/Header';
import ProjectSingle from 'components/ProjectSingle';
import * as S from './styles';

export function ProjectsTemplate() {
  return (
    <S.ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectSingle
          title="Projeto 1"
          type="Website"
          slug="test"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <ProjectSingle
          title="Projeto 1"
          type="Website"
          slug="test"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <ProjectSingle
          title="Projeto 1"
          type="Website"
          slug="test"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <ProjectSingle
          title="Projeto 1"
          type="Website"
          slug="test"
          imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </main>
    </S.ProjectsContainer>
  );
}
