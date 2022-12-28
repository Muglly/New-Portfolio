import { SectionTitle } from 'components/SectionTitle';
import { AboutItem } from './AboutItem';
import * as S from './styles';

export function About() {
  return (
    <S.Container>
      <SectionTitle title="#Sobre mim" />
      <section>
        <AboutItem />
      </section>
    </S.Container>
  );
}
