import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next/types';
import { getPrismicClient } from 'services/prismic';
import { HomeProps, HomeTemplate } from 'templates/Home/HomeTemplate';

export default function Home({ projects }: HomeProps) {
  return <HomeTemplate projects={projects} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  console.log(projectResponse.results);
  const project = projectResponse.results.map((project) => ({
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
      project,
    },
    revalidate: 86400,
  };
};
