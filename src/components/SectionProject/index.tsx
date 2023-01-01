import Link from 'next/link';
import ProjectItem from './ProjectItem';
import { SectionTitle } from 'components/SectionTitle';

import * as S from './styles';

type IProject = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  repositorio: string;
  thumbnail: string;
};

export type ProjectsProps = {
  projects: IProject[];
};

export function SectionProject({ projects }: ProjectsProps) {
  return (
    <S.Container>
      <SectionTitle title="#Ultimos Projetos" />
      <section>
        {projects.slice(0, 3).map(({ slug, title, type, thumbnail }) => (
          <ProjectItem
            key={`project-${slug}`}
            title={title}
            type={type}
            imgUrl={thumbnail}
            slug={slug}
          />
        ))}
      </section>
      <button>
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </S.Container>
  );
}
