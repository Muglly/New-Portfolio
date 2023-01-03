import { ReactNode } from 'react';
import * as S from './styles';

type KnowProps = {
  title: string;
  icon: ReactNode;
};

export default function KnowItem({ title, icon }: KnowProps) {
  return (
    <S.KnowContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </S.KnowContainer>
  );
}
