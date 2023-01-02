import { Header } from 'components/Header';
import ProjectSingle from 'components/ProjectSingle';
import { ProjectsProps } from 'components/SectionProject';

import * as S from './styles';

export function ProjectsTemplate({ projects }: ProjectsProps) {
  return (
    <S.ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(({ title, type, slug, thumbnail }) => (
          <ProjectSingle
            key={`project-${slug}`}
            title={title}
            type={type}
            slug={slug}
            imgUrl={thumbnail}
          />
        ))}
      </main>
    </S.ProjectsContainer>
  );
}
