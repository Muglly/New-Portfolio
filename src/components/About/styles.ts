import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    @media (max-width: 700px) {
      margin-top: 5rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 2.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    p {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;

      > strong {
        color: ${({ theme }) => theme.primary};
      }
    }

    &:hover {
      filter: brightness(1.2);
      transform: translateX(-20px);
    }

    &:nth-child(odd) {
      margin-left: 4rem;
    }

    &:nth-child(even) {
      margin-right: 4rem;
    }
  }

  @media (max-width: 500px) {
    > div {
      > p {
        font-size: 1rem;
      }
    }
  }
`;
