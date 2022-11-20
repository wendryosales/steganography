import styled, { css } from "styled-components";
import { IUploadMessage } from "./types";

export const messageColors = {
    default: css`
        color: #999;
    `,
    error: css`
        color: #e57878;
    `,
    success: css`
        color: #78e5d5;
    `,
};

export const UploadMessage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  text-align: center;
  ${(props: IUploadMessage) => messageColors[props.type || "default"]}
`;
