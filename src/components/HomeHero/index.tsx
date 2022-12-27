/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import me from '/public/img/Rafael-Souza.svg';

import * as S from './styles';

export function HomeHero() {
  return (
    <S.Container>
      <Image src={me} alt="Rafael Souza" width={640} />
      <div>
        <S.TextContainer>
          <h1>Olá,</h1>
          <h2>
            me chamo <span>Rafael</span>
          </h2>
        </S.TextContainer>

        <S.InfoContainer>
          <S.CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Rafael,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Souza</span>
            </div>
            {'\u007D'},
          </S.CodeItem>
          <S.CodeItem>
            {'\u007B'}
            <div>
              Cargo: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Faculdade:{' '}
              <span className="blue">
                Análise e <br />
                Desenvolvimento de Sistemas
              </span>
            </div>
            {'\u007D'}
          </S.CodeItem>
        </S.InfoContainer>
      </div>
    </S.Container>
  );
}
