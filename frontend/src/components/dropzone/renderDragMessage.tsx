// Mui
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Local
import { UploadMessage } from './styles/UploadMessage';

export const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
  if (!isDragActive) {
    return (
      <UploadMessage>
        <CloudUploadIcon />
        Arraste e solte algum arquivo .bmp aqui.
      </UploadMessage>
    );
  }
  if (isDragReject) {
    return (
      <UploadMessage type="error">
        <CloudOffIcon />
        Tipo de arquivo não suportado, sinto muito!
      </UploadMessage>
    );
  }
  return (
    <UploadMessage type="success">
      <CloudDoneIcon />
      Solte o arquivo aqui ...
    </UploadMessage>
  );
};