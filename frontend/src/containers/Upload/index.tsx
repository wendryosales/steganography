import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import BreadCrumb from '../../components/breadcrumb';
import Dropzone from "../../components/dropzone";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { uploadClose } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { Page } from "../style";


const UploadPage = () => {

  const dispatch = useAppDispatch();

  const open = useAppSelector((state: RootState) => state.uploadReducer);

  const handleClose = () => {
    dispatch(uploadClose());
  }

  return (
    <Page>
      <BreadCrumb />
      <Dropzone />
      <ControlledOpenSpeedDial />
      <Snackbar open={open === 'sucess'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Imagem enviada com sucesso!
        </Alert>
      </Snackbar>
    </Page>
  );
};

export default UploadPage;