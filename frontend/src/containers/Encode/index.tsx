// React
import { useEffect, useState } from "react";

// Redux
import { AnyAction } from 'redux';
import { getImages, uploadClose } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Image } from '../../redux/reducers/imagesReducer';
import { RootState } from '../../redux/store';

// Mui
import SaveIcon from '@mui/icons-material/Save';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// Local and Project
import BreadCrumb from "../../components/breadcrumb";
import DialogSelect from '../../components/dialogselect';
import ControlledOpenSpeedDial from "../../components/speed-dial";
import StandardImage from '../../components/standardmage';
import { Title } from '../SaveList/style';
import { Page } from "../style";

const Encode = () => {
  const dispatch = useAppDispatch();
  const [ selectedImage, setSelectedImage ] = useState<null | Image >(null);

  useEffect(() => {
    dispatch(getImages() as unknown as AnyAction);
  }, [dispatch]);

  const onSelected = (image: Image) => {
    setSelectedImage(image);
  };

  const open = useAppSelector((state: RootState) => state.upload);

  const handleClose = () => {
    dispatch(uploadClose());
  }

  return (
    <Page>
      <BreadCrumb
        page="Encriptografia"
        icon={<SaveIcon sx={{ mr: 0.5 }} fontSize="inherit" />}/>
        { selectedImage ? (
            <DialogSelect
              image={selectedImage}
              onComeBack={() => setSelectedImage(null)}
          />
        ) : (
          <>
            <Title> Selecione uma imagem para escrever uma mensagem</Title>
            <StandardImage
              onClick={onSelected}
            />
          </>
        )}
      <Snackbar open={open === 'sucess'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Imagem codificada com sucesso!
        </Alert>
      </Snackbar>
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default Encode;