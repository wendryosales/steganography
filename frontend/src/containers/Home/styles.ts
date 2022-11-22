import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 2rem;
    }
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    color: #f2f2f2;
  }
`;
