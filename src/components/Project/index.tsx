import { SectionTitle } from 'components/SectionTitle';
import ProjectItem from './ProjectItem';
import * as S from './styles';

export function Project() {
  return (
    <S.Container>
      <SectionTitle title="#Ultimos Projetos" />
      <section>
        <ProjectItem />
      </section>
    </S.Container>
  );
}
