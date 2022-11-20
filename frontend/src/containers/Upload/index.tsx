import BreadCrumb from '../../components/breadcrumb';
import Dropzone from "../../components/dropzone";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { Page } from "../style";


const UploadPage = () => {
  return (
    <Page>
      <BreadCrumb />
      <Dropzone />
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default UploadPage;