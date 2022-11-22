import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  text-align: center;
  padding: 1rem;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  height: max-content;

  strong {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BlackBox = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
`;

export const ContainerMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;

  color: #34ec00;
  font-size: 4rem;
  font-family: 'Rubik Distressed', cursive;
  text-align: center;
`