import { AiFillMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import * as S from './styles';

export function Footer() {
  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      <div className="container">
        <button onClick={handleScrollTop}>Voltar ao topo</button>
        <section>
          <AiFillMail
            onClick={() => handleRedirect('mailto:rpsouza.dev@gmail.com')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/devrafaelsouza/')
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/Muglly')}
          />
        </section>
      </div>
    </S.Container>
  );
}
