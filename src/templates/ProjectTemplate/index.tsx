import Link from 'next/link';
import { Header } from 'components/Header';
import { ProjectProps } from 'pages/projects/[slug]';
import { ProjectBanner } from 'components/ProjectBanner';

import * as S from './styles';
import { NextSeo } from 'next-seo';

export function ProjectTemplate({ project }: ProjectProps) {
  return (
    <S.Container>
      <NextSeo
        title={`Projeto - ${project.title}`}
        description={project.description}
        canonical="https://rpsuza.vercel.app/"
        openGraph={{
          url: 'https://rpsuza.vercel.app/',

          images: [
            {
              url: project.thumbnail,

              alt: `${project.title}`,
            },
          ],
        }}
      />
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
