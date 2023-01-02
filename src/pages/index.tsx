import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next/types';
import { getPrismicClient } from 'services/prismic';
import { ProjectsProps } from 'components/SectionProject';
import { HomeTemplate } from 'templates/Home/HomeTemplate';

export default function Home({ projects }: ProjectsProps) {
  return <HomeTemplate projects={projects} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map((project) => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    repositorio: project.data.repositorio.url,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 86400,
  };
};
