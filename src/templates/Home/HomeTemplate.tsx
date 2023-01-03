import { About } from 'components/About';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { HomeHero } from 'components/HomeHero';
import { Knowledge } from 'components/Knowledge';
import { ProjectsProps, SectionProject } from 'components/SectionProject';

import * as S from './styles';
import { NextSeo } from 'next-seo';

export function HomeTemplate({ projects }: ProjectsProps) {
  return (
    <S.Container>
      <NextSeo
        title="Home | Rafael Souza"
        description="Meu portfolio, onde faço um breve resumo sobre mim e mostros algus projetos que já fiz."
        canonical="https://rpsuza.vercel.app/"
        openGraph={{
          url: 'https://rpsuza.vercel.app/',
          images: [
            {
              url: 'https://rpsuza.vercel.app/img/Home.PNG',
              width: 1280,
              height: 720,
              alt: 'Rafael Souza | Portfolio',
            },
          ],
          site_name: 'Rafael Souza | Portfolio',
        }}
      />
      <Header />

      <main className="container">
        <HomeHero />
        <About />
        <SectionProject projects={projects} />
        <Knowledge />
      </main>
      <Footer />
    </S.Container>
  );
}
