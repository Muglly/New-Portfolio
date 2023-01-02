import Link from 'next/link';
import { Header } from 'components/Header';
import { ProjectProps } from 'pages/projects/[slug]';
import { ProjectBanner } from 'components/ProjectBanner';

import * as S from './styles';

export function ProjectTemplate({ project }: ProjectProps) {
  console.log(project.repositorio);

  return (
    <S.Container>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>

        <div>
          <button>
            <Link href={project.link}> Ver projeto online</Link>
          </button>
          <button>
            <Link href={project.repositorio}> Ver repsitório</Link>
          </button>
        </div>
      </main>
    </S.Container>
  );
}
