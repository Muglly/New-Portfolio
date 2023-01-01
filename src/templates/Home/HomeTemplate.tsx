import { About } from 'components/About';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SectionProject } from 'components/SectionProject';
import { HomeHero } from 'components/HomeHero';
import { Knowledge } from 'components/Knowledge';

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

export type HomeProps = {
  projects: IProject[];
};

export function HomeTemplate({ projects }: HomeProps) {
  return (
    <S.Container>
      <Header />

      <main className="container">
        <HomeHero />
        <About />
        <SectionProject />
        <Knowledge />
      </main>
      <Footer />
    </S.Container>
  );
}
