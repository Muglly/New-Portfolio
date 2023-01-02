import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { getPrismicClient } from 'services/prismic';
import { ProjectsProps } from 'components/SectionProject';
import { ProjectTemplate } from 'templates/ProjectTemplate';

export default function Project() {
  return <ProjectTemplate />;
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

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('project', String(slug), {});

  console.log('>>>>>', response);

  // const projects = projectResponse.results.map((project) => ({
  //   slug: project.uid,
  //   title: project.data.title,
  //   type: project.data.type,
  //   description: project.data.description,
  //   link: project.data.link.url,
  //   repositorio: project.data.link.url,
  //   thumbnail: project.data.thumbnail.url,
  // }));

  return {
    props: {},
    revalidate: 86400,
  };
};
