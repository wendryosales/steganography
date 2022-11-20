// Third-party imports
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// Local imports
import { BreadcrumbsContainer } from './style';

export default function BreadCrumb() {
  return (
      <BreadcrumbsContainer aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <AddAPhotoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Upload
        </Typography>
      </BreadcrumbsContainer>
  );
}