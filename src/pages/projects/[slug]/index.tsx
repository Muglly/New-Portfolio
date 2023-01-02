import Prismic from '@prismicio/client';
import { getPrismicClient } from 'services/prismic';
import { useRouter } from 'next/dist/client/router';
import { LoadingScreen } from 'components/LoadingScreen';
import { GetStaticPaths } from 'next/types';
import { ProjectTemplate } from 'templates/ProjectTemplate';

type SlugProps = {
  params: {
    slug: string;
  };
};

type IProject = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  repositorio: string;
  thumbnail: string;
};

export type ProjectProps = {
  project: IProject;
};

export default function Project({ project }: ProjectProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return <ProjectTemplate project={project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project'),
  ]);

  const paths = projects.results.map((project) => ({
    params: {
      slug: project.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: SlugProps) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    repositorio: response.data.repositorio.url,
    thumbnail: response.data.thumbnail.url,
  };

  return {
    props: {
      project,
    },
    revalidate: 86400,
  };
};
