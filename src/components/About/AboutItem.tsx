import * as S from './styles';

export function AboutItem() {
  return (
    <S.ItemContainer>
      <div data-aos="fade-left">
        <p>
          Olá, me chamo Rafael Souza, apaixonado por tecnologia e desenvolvo
          aplicações Front-end.
          <strong> Estou sempre buscando aprimorar meus conhecimentos</strong> e
          atento as novidades do mercado.
        </p>
      </div>

      <div data-aos="fade-right">
        <p>
          Desenvolvo projetos tanto para Web 🌐 com <strong>React.js</strong>,
          quanto para mobile 📱 de forma nativa com
          <strong> React Native</strong>, utilizando as principais tecnologias e
          as melhores práticas.
        </p>
      </div>

      <div data-aos="fade-left">
        <p>
          Me considero ágil e
          <strong> consistente para aprender uma nova tecnologia</strong>, e
          também com facilidade em se adaptar a mudanças e pronto para superar
          qualquer desafio!
        </p>
      </div>

      <div data-aos="fade-right">
        <p>
          Se eu pudesse me definir em 3 palavras, certamente seriam:
          <strong> otimista</strong>, <strong>criativo</strong> e
          <strong> esforçado</strong>! 😁
        </p>
      </div>
    </S.ItemContainer>
  );
}
