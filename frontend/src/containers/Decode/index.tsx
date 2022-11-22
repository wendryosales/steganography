// Mui
import LockOpenIcon from '@mui/icons-material/LockOpen';

// Local and Project
import BreadCrumb from "../../components/breadcrumb";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { UnlockByID } from '../../components/unlockbyid';
import { Page } from "../style";

const Decode = () => {
  return (
    <Page>
      <BreadCrumb
        page="Descriptografia"
        icon={<LockOpenIcon fontSize="inherit"/>}/>
      <UnlockByID />
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default Decode;