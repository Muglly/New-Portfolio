import * as S from './styles';

export function LoadingScreen() {
  return (
    <S.Container>
      <S.SpinnerContainer>
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </S.SpinnerContainer>
    </S.Container>
  );
}
