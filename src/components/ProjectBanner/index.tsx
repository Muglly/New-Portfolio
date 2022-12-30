import { ProjectItemProps } from 'components/ProjectSingle';

import * as S from './styles';

export function ProjectBanner({ title, type, imgUrl }: ProjectItemProps) {
  return (
    <S.Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </S.Container>
  );
}
