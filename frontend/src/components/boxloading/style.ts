import styled, { css } from "styled-components";

const border = css`
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

type Container = {
  done?: boolean;
  isLoading?: boolean;
};

export const Container = styled.div`
  transition: height 0.3s ease;
  width: 100%;
  height: ${({isLoading, done }:Container) => isLoading || done ? "100%" : "0px"};
  background-color: ${({done}:Container) => done ? "#78e5d5" : "#fff"};
  ${({isLoading}:Container) => isLoading ? border : ""};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: ${({done}:Container) => done ? "3" : "2"};

  .progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60%;

    span {
      display: ${({isLoading}:Container) => isLoading ? 'block' : "none"};
      width: 100%;
    }

    svg {
      display: ${({done}:Container) => done ? "block" : "none"};
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;
