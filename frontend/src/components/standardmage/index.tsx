import ImageList from '@mui/material/ImageList';
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Container, ImageHoverItem } from './style';

const StandardImage = () => {
  const {images, loading} =  useAppSelector((state: RootState) => state.imageReducer);

  const onDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
  }

  return (
    <Container>
      {
        loading ? <h1>Carregando...</h1> : (
          <ImageList
            sx={{ width: 500, height: 450, pr: 2 }}
            variant="woven"
            cols={3}
            gap={7}>
            {images.results.map((item) => (
              <ImageHoverItem
                key={item.id}
                onClick={() => onDownload(item.url, item.name)}>
                <img
                  src={`${item.image}`}
                  srcSet={`${item.url}?`}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageHoverItem>
            ))}
          </ImageList>
        )
      }
    </Container>
  );
};


export default StandardImage;