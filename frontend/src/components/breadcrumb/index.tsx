// Muia
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// Local imports
import { BreadcrumbsContainer } from './style';
import { IBreadCrumbProps } from './types';

export default function BreadCrumb({ page, icon }: IBreadCrumbProps) {
  return (
      <BreadcrumbsContainer aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Início
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <>
            {icon}
            {page}
          </>
        </Typography>
      </BreadcrumbsContainer>
  );
}