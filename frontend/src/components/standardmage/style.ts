import ImageListItem from '@mui/material/ImageListItem';
import styled from "styled-components";


export const Container = styled.div`
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageHoverItem = styled(ImageListItem)`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    
    margin: 0.5rem;
    &:hover {
        transform: scale(1.1);
    }
`;