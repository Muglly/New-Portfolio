import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;
