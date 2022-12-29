import Link from 'next/link';

import * as S from './styles';

export type ProjectItemProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
};

export default function ProjectSingle({
  title,
  type,
  slug,
  imgUrl,
}: ProjectItemProps) {
  return (
    <S.Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </S.Container>
  );
}
