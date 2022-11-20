import { useEffect } from "react";
import { AnyAction } from 'redux';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getImages } from "../../redux/reducers/imagesReducer";
import { RootState } from "../../redux/store";

const SaveList = () => {
  const {images, loading} =  useAppSelector((state: RootState) => state.imageReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImages() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div>
      {
        loading ? <h1>Carregando...</h1> 
          : images.results.map((image) => <img src={image.url} alt={image.name} />)
      }
    </div>
  );
};

export default SaveList;