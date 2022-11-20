import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { IImagePreview } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  section {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 50px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 5px;
      height: 100%;

      strong {
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const ImagePreview = styled.div`
  background-image: url(${(props: IImagePreview) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 100%;
`;

export const ButtonClose = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e57878;
  }
`