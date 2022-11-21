import ImageList from '@mui/material/ImageList';
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Container, ImageHoverItem } from './style';
import { IStandardImageProps } from './type';

const StandardImage = ({onClick}: IStandardImageProps) => {
  const {images, loading} =  useAppSelector((state: RootState) => state.imageReducer);

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
                onClick={() => onClick(item)}>
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