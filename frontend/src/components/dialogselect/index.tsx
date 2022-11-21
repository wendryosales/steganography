import EditIcon from '@mui/icons-material/Edit';
import UndoIcon from '@mui/icons-material/Undo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { AnyAction } from 'redux';
import { encodeImage, uploadSucess } from '../../redux/actions';
import { useAppDispatch } from '../../redux/hooks';
import { DialogSelectContainer, ImageItem } from './style';
import { IDialogSelectProps } from './types';

export default function DialogSelect({ image, onComeBack } : IDialogSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState<string>('');
  const [textError, setTextError] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length < 5) {
      setTextError(true);
    }
    else {
      setTextError(false);
    }
    setMessage(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSubmmit = () => {
    const data = {
      image: image.id,
      message,
    };
    dispatch(encodeImage(data) as unknown as AnyAction).then(() => {
      setOpen(false);
      onComeBack();
      dispatch(uploadSucess())
    });
  };

  return (
    <div>
      <DialogSelectContainer>
        <ImageItem>
          <img
            src={`${image.image}`}
            alt={image.name}
          />
        </ImageItem>
        <ButtonGroup
          variant="outlined"
          aria-label="Disabled elevation buttons"
        >
          <Button onClick={handleClickOpen} sx={{color: '#fff'}} >
            Escrever nesta imagem
            <EditIcon sx={{ ml: 1 }} />
          </Button>
          <Button onClick={onComeBack} sx={{color: '#fff'}} >
            Voltar
            <UndoIcon sx={{ ml: 1 }} />
          </Button>
        </ButtonGroup>
      </DialogSelectContainer>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Digite a mensagem a ser codificada</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                required
                error={textError}
                label="Mensagem"
                helperText={textError ? 'Mensagem muito curta' : ''}
                value={message}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            disabled={textError}
            onClick={handleSubmmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}