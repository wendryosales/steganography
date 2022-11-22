// React
import { memo } from 'react';

// Mui
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

// Local
import { Container, LinkContainer } from "./style";
import { IBoxLoadingProps } from "./types";

const BoxLoading = (props: IBoxLoadingProps) => {
  const { isLoading, progress, done } = props;

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
              Imagem enviada com sucesso!
            </LinkContainer>
          </div>
        )
      }
    </Container>
  );
};

export default memo(BoxLoading);