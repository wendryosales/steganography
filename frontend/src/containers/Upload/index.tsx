import Dropzone from "../../components/dropzone";
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { Page } from "../style";

const UploadPage = () => {
  return (
    <Page>
      <Dropzone />
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default UploadPage;