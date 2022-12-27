import { Header } from 'components/Header';

import * as S from './styles';

export function HomeTemplate() {
  return (
    <S.Container>
      <Header />

      <main>
        <HomeHero />
      </main>
    </S.Container>
  );
}
