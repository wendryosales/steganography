import SendIcon from '@mui/icons-material/Send';
import Fab from "@mui/material/Fab";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import BreadCrumb from '../../components/breadcrumb';
import Dropzone from "../../components/dropzone";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { actionTeste } from '../../redux/actions';
import { Page } from "../style";


const UploadPage = () => {
  const [hasFile, setHasFile] = useState(false);

  const dispatch = useDispatch();

  const onSubmitted = () => {
    dispatch(actionTeste());
  }

  return (
    <Page>
      <BreadCrumb />
      <Dropzone setHasFile={setHasFile} />
      {
        hasFile && (
          <Fab  variant="extended" sx={{ mt: 1 }} onClick={onSubmitted}>
            <p> Enviar arquivo </p>
            <SendIcon color="success" sx={{ ml: 1 }} />
          </Fab>
        )
      }
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default UploadPage;