import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { memo } from 'react';
import api from '../../services/api';
import { Container, LinkContainer } from "./style";
import { IBoxLoadingProps } from "./types";

const BoxLoading = (props: IBoxLoadingProps) => {
  const { isLoading, progress, done, link } = props;

  const handleDownload = (link: string) => {
    const url = api.defaults.baseURL + link;
    window.open(url, '_blank');
  }

  return (
    <Container isLoading={isLoading} done={done}>
      {
        !done ? (
          <div className='progress'>
            <CircularProgress variant="determinate" value={progress} />
            <LinearProgress variant="determinate" value={progress} />
          </div>
        )
        : (
          <div className='progress'>
            <CheckCircleOutlineIcon color="success" fontSize='large'/>
            <LinkContainer>
              Baixar Imagem enviada.
              <FileDownloadIcon
                sx={{ cursor: 'pointer' }}
                color="primary"
                fontSize='large'
                onClick={() => link && handleDownload(link)}/>
            </LinkContainer>
          </div>
        )
      }
    </Container>
  );
};

export default memo(BoxLoading);