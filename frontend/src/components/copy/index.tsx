// Mui
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from "@mui/material/Button";

// Local
import { ICopyProps } from './types';

export const Copy = ({ id }: ICopyProps) => {
  const copyToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    navigator.clipboard.writeText(el.value);
    document.body.removeChild(el);
    alert("Texto copiado: " + el.value);
  };

  return (
    <div>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '100%' }}
          onClick={() => copyToClipboard(id)}
        >
          <ContentCopyIcon sx={{ mr: 1 }} />
          Copiar
        </Button>
    </div>
  );
};