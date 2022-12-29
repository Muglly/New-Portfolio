import { About } from 'components/About';
import { Header } from 'components/Header';
import { Project } from 'components/Project';
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
        <Project />
        <Knowledge />
      </main>
    </S.Container>
  );
}
