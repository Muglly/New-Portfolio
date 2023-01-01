import { About } from 'components/About';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { HomeHero } from 'components/HomeHero';
import { Knowledge } from 'components/Knowledge';
import { ProjectsProps, SectionProject } from 'components/SectionProject';

import * as S from './styles';

export function HomeTemplate({ projects }: ProjectsProps) {
  return (
    <S.Container>
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
