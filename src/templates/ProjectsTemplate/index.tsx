import { Header } from 'components/Header';
import ProjectSingle from 'components/ProjectSingle';
import { ProjectsProps } from 'components/SectionProject';
import { NextSeo } from 'next-seo';

import * as S from './styles';

export function ProjectsTemplate({ projects }: ProjectsProps) {
  return (
    <S.ProjectsContainer>
      <NextSeo
        title="Projetos | Rafael Souza"
        description="Aguns dos projetos que já de senvolvi, que estão online."
        canonical="https://rpsuza.vercel.app/"
        openGraph={{
          url: 'https://rpsuza.vercel.app/',
        }}
      />
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
