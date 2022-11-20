import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { filesize } from "filesize";
import { ReactNode } from 'react';
import { Container, FileContainer, ImagePreview } from "./style";
import { IFileInfoProps } from "./types";

export const FileInfo = ({ preview, file, onDelete }: IFileInfoProps) => {
  const { name, size } = file;
  return (
    <Container>
      <FileContainer>
        <section>
          <ImagePreview src={preview as string} />
          <div>
            <strong>{name}</strong>
            <span>{filesize(size) as ReactNode}</span>
          </div>
        </section>
        <IconButton aria-label='delete' onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </FileContainer>
    </Container>
  );
};