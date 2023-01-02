import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectItemProps } from 'components/ProjectSingle';

import * as S from './styles';

export default function ProjectItem({
  title,
  type,
  slug,
  imgUrl,
}: ProjectItemProps) {
  return (
    <S.ProjectContainer imgUrl={imgUrl}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button>
        <Link href={`/projects/${slug}`}>
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </S.ProjectContainer>
  );
}
