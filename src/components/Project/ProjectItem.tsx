import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import * as S from './styles';

type ProjectItemProps = {
  title: string;
  type: string;
  slug: string;
  img: string;
};

export default function ProjectItem({
  title,
  type,
  slug,
  img,
}: ProjectItemProps) {
  return (
    <S.ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button>
        <Link href={`/projetos/${slug}`}>
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </S.ProjectContainer>
  );
}
