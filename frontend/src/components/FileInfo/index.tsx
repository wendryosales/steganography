import CloseIcon from '@mui/icons-material/Close';
import { ButtonClose, Container, FileContainer, ImagePreview } from "./style";
import { IFileInfoProps } from "./types";

export const FileInfo = ({ file, onDelete }: IFileInfoProps) => {
  const { name, size } = file;
  const to_MB = 0.000001
  const sizeInMB = (size * to_MB).toFixed(2);
  return (
    <Container>
      <FileContainer>
        <section>
          <ImagePreview src='https://avatars.githubusercontent.com/u/2254731?v=4' />
          <div>
            <strong>{name}</strong>
            <span>{sizeInMB} Mb</span>
          </div>
        </section>
        <ButtonClose onClick={onDelete} />
      </FileContainer>
    </Container>
  );
};