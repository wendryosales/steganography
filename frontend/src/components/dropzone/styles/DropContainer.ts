import styled, { css } from "styled-components";
import { IDropContainerProps } from "./types";

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone",
    })`
    background: #fff;
    border-radius: 10px;
    border: 1px dashed #999;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: height 0.2s ease;

    ${(props: IDropContainerProps) => props.isDragActive && dragActive}
    ${(props: IDropContainerProps) => props.isDragReject && dragReject}
`;
