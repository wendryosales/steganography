import SaveIcon from '@mui/icons-material/Save';
import { useEffect } from "react";
import { AnyAction } from 'redux';
import BreadCrumb from "../../components/breadcrumb";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { useAppDispatch } from "../../redux/hooks";
import { getImages } from "../../redux/reducers/imagesReducer";
import { Page } from "../style";

const Encode = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImages() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <Page>
      <BreadCrumb
        page="Encriptografia"
        icon={<SaveIcon sx={{ mr: 0.5 }} fontSize="inherit" />}/>
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default Encode;