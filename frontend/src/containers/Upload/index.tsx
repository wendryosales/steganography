// Redux
import { uploadClose } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

// Mui
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// Local and Project
import BreadCrumb from '../../components/breadcrumb';
import Dropzone from "../../components/dropzone";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { Page } from "../style";

const UploadPage = () => {

  const dispatch = useAppDispatch();

  const open = useAppSelector((state: RootState) => state.upload);

  const handleClose = () => {
    dispatch(uploadClose());
  }

  return (
    <Page>
      <BreadCrumb
        page="upload"
        icon={<AddAPhotoIcon sx={{ mr: 0.5 }} fontSize="inherit" />}/>
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