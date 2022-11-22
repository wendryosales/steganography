// React
import { useState } from 'react';

// Mui
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";

// Local
import { Container } from './style';

export const Help = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <IconButton aria-label="help" onClick={handleClickOpen}>
        <HelpIcon sx={{color: '#fff', width: '56px', height: '56px'}} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Ajuda</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
          >
            <h2>Como usar?</h2>
            <p>
              Para usar o Catpunk Steganography, você precisa de uma imagem e uma mensagem.
            </p>
            <p>
              A imagem deve ser uma imagem BMP, e a mensagem deve ser uma string de texto.
            </p>
            <h2>Onde começar?</h2>
            <p>
              Comece pelo menu lateral, onde você pode escolher entre esconder uma mensagem ou revelar uma mensagem.
            </p>
            <h2>Como esconder uma mensagem?</h2>
            <ul>
              <li>
                Escolha uma imagem BMP e realize o upload.
              </li>
              <li>
                No Menu lateral, clique em encriptografar.
              </li>
              <li>
                Escolha a imagem desejada, e digite a mensagem no campo de texto.
              </li>
              <li>
                Clique em Encriptar.
              </li>
              <li>
                A imagem encriptada será enviada para o nosso banco de dados e processada.
              </li>
            </ul>
            <h2>Como revelar uma mensagem?</h2>
            <ul>
              <li>
                No Menu lateral, clique em decriptografar.
              </li>
              <li>
                Coloque a identificação da imagem que você deseja revelar.
              </li>
              <li>
                Clique em revelar mensagem.
              </li>
              <li>
                A mensagem será revelada.
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Entendi</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};