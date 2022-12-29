import { SectionTitle } from 'components/SectionTitle';
import KnowItem from './KnowItem';

import { FaReact } from 'react-icons/fa';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import {
  SiExpo,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import * as S from './styles';

export function Knowledge() {
  return (
    <S.Container>
      <SectionTitle title="#Conhecimentos" />
      <section>
        <KnowItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowItem title="CSS" icon={<IoLogoCss3 />} />
        <KnowItem title="JAVASCRIPT" icon={<IoLogoJavascript />} />
        <KnowItem title="TYPESCRIPT" icon={<SiTypescript />} />
        <KnowItem title="REACT.jS" icon={<FaReact />} />
        <KnowItem title="NEXT.JS" icon={<SiNextdotjs />} />
        <KnowItem title="GRAPHQL" icon={<SiGraphql />} />
        <KnowItem title="EXPO" icon={<SiExpo />} />
        <KnowItem title="STYLED COMPONENTS" icon={<SiStyledcomponents />} />
        <KnowItem title="TAILWIND" icon={<SiTailwindcss />} />
        <KnowItem title="FIREBASE" icon={<IoLogoFirebase />} />
        <KnowItem title="JEST" icon={<SiJest />} />
        <KnowItem title="GIT/GITHUB" icon={<AiOutlineGithub />} />
      </section>
    </S.Container>
  );
}
