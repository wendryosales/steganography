import SaveIcon from '@mui/icons-material/Save';
import { useEffect } from "react";
import { AnyAction } from 'redux';
import BreadCrumb from "../../components/breadcrumb";
import StandardImage from "../../components/standardmage";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { useAppDispatch } from "../../redux/hooks";
import { getImages } from "../../redux/reducers/imagesReducer";
import { Page } from "../style";
import { Title } from './style';

const SaveList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImages() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <Page>
      <BreadCrumb
        page="Salvar"
        icon={<SaveIcon sx={{ mr: 0.5 }} fontSize="inherit" />}/>
      <Title> Selecione uma imagem para baixa-la </Title>
      <StandardImage />
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default SaveList;