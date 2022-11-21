import styled from "styled-components";

export const DialogSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ImageItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  margin: 0.5rem;

  img {
    width: 100%;
    max-width: 500px;
    max-height: 400px;
    cursor: auto;
  }
`;