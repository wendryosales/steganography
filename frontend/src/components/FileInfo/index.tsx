import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Container, FileContainer, ImagePreview } from "./style";
import { IFileInfoProps } from "./types";

export const FileInfo = ({ preview, file, onDelete }: IFileInfoProps) => {
  const { name, size } = file;
  const to_MB = 0.000001
  const sizeInMB = (size * to_MB).toFixed(2);
  return (
    <Container>
      <FileContainer>
        <section>
          <ImagePreview src={preview} />
          <div>
            <strong>{name}</strong>
            <span>{sizeInMB} Mb</span>
          </div>
        </section>
        <IconButton aria-label='delete' onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </FileContainer>
    </Container>
  );
};