import { About } from 'components/About';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SectionProject } from 'components/SectionProject';
import { HomeHero } from 'components/HomeHero';
import { Knowledge } from 'components/Knowledge';

import * as S from './styles';

export function HomeTemplate() {
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
