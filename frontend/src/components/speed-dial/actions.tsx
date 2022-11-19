import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HttpsIcon from '@mui/icons-material/Https';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SaveIcon from '@mui/icons-material/Save';

export const actions = [
  { icon: <AddAPhotoIcon />, name: 'Upload', link: '/upload' },
  { icon: <HttpsIcon />, name: 'Criptografar', link: '/encode' },
  { icon: <LockOpenIcon />, name: 'Descriptografar', link: '/decode' },
  { icon: <SaveIcon />, name: 'Save', link: '/save' },
];