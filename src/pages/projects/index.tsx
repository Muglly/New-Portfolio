import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next/types';
import { getPrismicClient } from 'services/prismic';
import { ProjectsProps } from 'components/SectionProject';
import { ProjectsTemplate } from 'templates/ProjectsTemplate';

export default function Projects({ projects }: ProjectsProps) {
  return <ProjectsTemplate projects={projects} />;
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
    repositorio: project.data.link.url,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 86400,
  };
};
